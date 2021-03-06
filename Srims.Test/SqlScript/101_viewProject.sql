IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewProject]'))
DROP VIEW [dbo].[viewProject]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewProject]
AS

SELECT 
	Project.ID AS ID,
	Project.Number AS [Number],
	Project.Name AS [Name],
	Project.NameSpell AS [NameSpell],
	Project.Level AS [LevelValue],
	dbo.fnShowProjectLevel(Project.Level) AS [Level],
	Project.ResearchType AS [ResearchType],
	Project.CooperationType AS [CooperationType],
	Project.IsSecret AS [IsSecretValue],
	dbo.fnShowBoolean(Project.IsSecret) AS IsSecret,
	Project.StartDate AS [StartDate],
	Project.EndDate AS [EndDate],
	Project.TaskComingFrom AS [TaskComingFrom],
	Project.CorporationPlace AS [CorporationPlace],
	Project.Creator AS [Creator],
	Project.CreateDate AS [CreateDate],
	Project.Remark AS [Remark],

	PrincipalExpert.ID AS PrincipalID,
	PrincipalExpert.Name AS PrincipalName,
	PrincipalExpert.NameSpell AS PrincipalNameSpell,
	PrincipalExpert.Number AS PrincipalNumber,
	PrincipalDepartment.ID AS PrincipalCollegeID,
	PrincipalDepartment.Name AS PrincipalCollege,

	DelegatePrincipalExpert.ID AS DelegatePrincipalID,
	DelegatePrincipalExpert.Name AS DelegatePrincipalName,
	DelegatePrincipalExpert.NameSpell AS DelegatePrincipalNameSpell,
	DelegatePrincipalExpert.Number AS DelegatePrincipalNumber,
	DelegatePrincipalDepartment.ID AS DelegatePrincipalCollegeID,
	DelegatePrincipalDepartment.Name AS DelegatePrincipalCollege,

	ProjectInfo_Type.ID AS TypeID,
	ProjectRank.ID AS ProjectRankID,
	ProjectRank.Name AS ProjectRankName,
	ProjectRank.IsHorizontal AS IsHorizontalValue,
	dbo.fnShowBoolean(ProjectRank.IsHorizontal) AS IsHorizontal,
	ProjectType.ID AS ProjectTypeID,
	ProjectType.SubjectNature AS SubjectNature,
	ProjectType.Name AS ProjectTypeName,
	ProjectSupportCategory.ID AS ProjectSupportCategoryID,
	ProjectSupportCategory.Name AS ProjectSupportCategoryName,
	ProjectSupportField.ID AS ProjectSupportFieldID,
	ProjectSupportField.Name AS ProjectSupportFieldName,
	ProjectSupportSubField.ID AS ProjectSupportSubFieldID,
	ProjectSupportSubField.Name AS ProjectSupportSubFieldName,

	ProjectInfo_Fund.ID AS FundID,
	ProjectInfo_Fund.AccountBookNumber AS AccountBookNumber,
	ProjectInfo_Fund.AccountBookNumberCount AS AccountBookNumberCount,
	ProjectInfo_Fund.FundFrom AS FundFrom,
	ProjectInfo_Fund.FundFromUnit AS FundFromUnit,
	ProjectInfo_Fund.FundFromUnitAddress AS FundFromUnitAddress,
	ProjectInfo_Fund.FundContract AS FundContract,
	ProjectInfo_Fund.FundTotal AS FundTotal,
	ProjectInfo_Fund.FundTotal - ProjectInfo_Fund.FundPlanOut - ProjectInfo_Fund.FundPlanHardware AS FundPlanIn,
	ProjectInfo_Fund.FundPlanOut AS FundPlanOut,
	ProjectInfo_Fund.FundPlanHardware AS FundPlanHardware,
	ProjectInfo_Fund.FundReceived AS FundReceived,
	ProjectInfo_Fund.FundAlreadyIn AS FundAlreadyIn,
	ProjectInfo_Fund.FundAlreadyOut AS FundAlreadyOut,
	ProjectInfo_Fund.FundAlreadyHardware AS FundAlreadyHardware,
	ProjectInfo_Fund.OverheadExpenseInTotal AS OverheadExpenseInTotal,
	ProjectInfo_Fund.OverheadExpenseOutTotal AS OverheadExpenseOutTotal,
	ProjectInfo_Fund.OverheadExpensesAlreadyIn AS OverheadExpensesAlreadyIn,
	ProjectInfo_Fund.OverheadExpensesAlreadyOut AS OverheadExpensesAlreadyOut,

	ProjectState.ID AS CurrentStateID,
	ProjectState.State AS CurrentStateValue,
	dbo.fnShowProjectState(ProjectState.State) AS CurrentState,
	dbo.fnIsProjectAvailable(ProjectState.State) AS IsAvailable,

	SubjectFirstLevel.ID AS SubjectFirstLevelID,
	SubjectFirstLevel.Name AS SubjectFirstLevelName,
	SubjectFirstLevel.Code AS SubjectFirstLevelCode,

	SubjectSecondLevel.ID AS SubjectSecondeLevelID,
	SubjectSecondLevel.Name AS SubjectSecondeLevelName,
	SubjectSecondLevel.Code AS SubjectSecondeLevelCode,

	Base.ID AS BaseID,
	Base.Name AS BaseName

FROM         
	Project AS Project

	LEFT OUTER JOIN Expert As PrincipalExpert ON Project.PrincipalID = PrincipalExpert.ID 
	LEFT OUTER JOIN Department As PrincipalDepartment ON PrincipalExpert.CollegeID = PrincipalDepartment.ID 

	LEFT OUTER JOIN Expert As DelegatePrincipalExpert ON Project.PrincipalID = DelegatePrincipalExpert.ID 
	LEFT OUTER JOIN Department As DelegatePrincipalDepartment ON DelegatePrincipalExpert.CollegeID = DelegatePrincipalDepartment.ID 
	
	LEFT OUTER JOIN ProjectInfo_Type AS ProjectInfo_Type ON Project.TypeID = ProjectInfo_Type.ID 
	LEFT OUTER JOIN ProjectRank AS ProjectRank ON ProjectInfo_Type.RankID = ProjectRank.ID
	LEFT OUTER JOIN ProjectType AS ProjectType ON ProjectInfo_Type.TypeID = ProjectType.ID 
	LEFT OUTER JOIN ProjectSupportCategory AS ProjectSupportCategory ON ProjectInfo_Type.SupportCategoryID = ProjectSupportCategory.ID 
	LEFT OUTER JOIN ProjectSupportField AS ProjectSupportField ON ProjectInfo_Type.SupportFieldID = ProjectSupportField.ID 
	LEFT OUTER JOIN ProjectSupportSubField AS ProjectSupportSubField ON ProjectInfo_Type.SupportSubFieldID = ProjectSupportSubField.ID 

	LEFT OUTER JOIN ProjectInfo_Fund AS ProjectInfo_Fund ON Project.FundID = ProjectInfo_Fund.ID 

	LEFT OUTER JOIN ProjectStateHistory As ProjectState ON Project.CurrentStateID = ProjectState.ID

	LEFT OUTER JOIN SubjectFirstLevel As SubjectFirstLevel ON Project.FirstLevelSubjectID = SubjectFirstLevel.ID
	LEFT OUTER JOIN SubjectSecondLevel As SubjectSecondLevel ON Project.SecondLevelSubjectID = SubjectSecondLevel.ID

	LEFT OUTER JOIN Base As Base ON Project.BaseID = Base.ID

GO
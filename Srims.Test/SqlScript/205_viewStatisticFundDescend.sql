IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewStatisticFundDescend]'))
DROP VIEW [dbo].[viewStatisticFundDescend]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewStatisticFundDescend]
AS
SELECT 
	FundDescend.ID AS ID,
	FundDescend.Amount AS Amount,
	
	dbo.fnDateToYearString(Finance.ReceivedDate) AS FinanceDateTime_Year,
	dbo.fnDateToYearMonthString(Finance.ReceivedDate) AS FinanceDateTime_YearMonth,
	dbo.fnDateToYearMonthDayString(Finance.ReceivedDate) AS FinanceDateTime_YearMonthDay,
	
	dbo.fnDateToYearString(FundDescend.DescendDateTime) AS DescendDateTime_Year,
	dbo.fnDateToYearMonthString(FundDescend.DescendDateTime) AS DescendDateTime_YearMonth,
	dbo.fnDateToYearMonthDayString(FundDescend.DescendDateTime) AS DescendDateTime_YearMonthDay,
	
	dbo.fnDateToYearString(Project.StartDate) AS StartDate_Year,
	dbo.fnDateToYearMonthString(Project.StartDate) AS StartDate_YearMonth,
	dbo.fnDateToYearMonthDayString(Project.StartDate) AS StartDate_YearMonthDay,

	dbo.fnShowExpertWithNumber(Project.PrincipalName, PrincipalNumber) AS Principal_Expert,
	dbo.fnConvertNullToUnknown(Project.PrincipalCollege) AS Principal_College,

	Project.ProjectRankName AS ProjectType_Rank,
	dbo.fnConvertNullToUnknown(Project.ProjectTypeName) AS ProjectType_Type

FROM         
	FundDescend AS FundDescend 
	LEFT JOIN viewProject AS Project ON FundDescend.ProjectInfo_FundID = Project.FundID
	LEFT JOIN FundDescendStateHistory AS FundDescendStateHistory ON FundDescend.CurrentStateID = FundDescendStateHistory.ID

	LEFT JOIN FinanceFundDescend AS FinanceFundDescend ON FinanceFundDescend.FundDescendID = FundDescend.ID
	LEFT JOIN Finance AS Finance ON FinanceFundDescend.FinanceID = Finance.ID

WHERE 
	FinanceFundDescend.IsReturn = 0

GO

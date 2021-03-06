IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spUpdateExpertAchieveStatistic]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[spUpdateExpertAchieveStatistic]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE spUpdateExpertAchieveStatistic 

	@Paper_IsLinkMan bit, 
	@Paper_AuthorOrderStart int, 
	@Paper_AuthorOrderEnd int, 

	@Patent_IsPrincipal bit, 
	@Patent_InvertorOrderStart int, 
	@Patent_InvertorOrderEnd int, 

	@Award_WinnerOrderStart int,
	@Award_WinnerOrderEnd int
AS
BEGIN
	SET NOCOUNT ON

	DECLARE
		@project_type AS nvarchar(MAX),
		@fund_type AS nvarchar(MAX),
		@paper_type AS nvarchar(MAX),
		@award_type AS nvarchar(MAX),
		@patent_type AS nvarchar(MAX);

	SET @project_type = '1';
	SET @fund_type = '1';
	SET @paper_type = '2';
	SET @award_type = '3';
	SET @patent_type = '4';

	DECLARE 
		@sql AS nvarchar(MAX),
		@sql_select_project AS nvarchar(MAX),
		@sql_select_fund AS nvarchar(MAX),
		@sql_select_paper AS nvarchar(MAX),
		@sql_select_patent AS nvarchar(MAX),
		@sql_select_award AS nvarchar(MAX);
		
	-- Project Count 
	SET @sql_select_project = '
		SELECT	Count(*)
		FROM	Project AS Project
		WHERE	Project.PrincipalID = Expert.ID
			AND ID IN (SELECT [ID] FROM [ExpertAchieveStatisticIDArray] WHERE [Type] = ' + @project_type + ')
	';

	-- Fund Total
	SET @sql_select_fund = '
		SELECT	Sum(Fund.FundTotal)
		FROM	Project AS Project
			LEFT JOIN ProjectInfo_Fund AS Fund ON Project.FundID = Fund.ID
		WHERE	Project.PrincipalID = Expert.ID
			AND Project.ID IN (SELECT [ID] FROM [ExpertAchieveStatisticIDArray] WHERE [Type] = ' + @project_type + ')
	';

	-- Paper Count
	SET @sql_select_paper = '
		SELECT	Count(*)
		FROM	PaperAuthor AS PaperAuthor
		WHERE	PaperAuthor.ExpertID = Expert.ID			
			AND PaperAuthor.PaperID IN (SELECT [ID] FROM [ExpertAchieveStatisticIDArray] WHERE [Type] = ' + @paper_type + ')
	';

	IF (@Paper_IsLinkMan IS NOT NULL)
		SET @sql_select_paper = @sql_select_paper + '
			AND PaperAuthor.IsLinkMan = ' + CAST(@Paper_IsLinkMan AS nvarchar(MAX)) + '
		'; 

	IF (@Paper_AuthorOrderStart IS NOT NULL)
		SET @sql_select_paper = @sql_select_paper + '
			AND PaperAuthor.[Order] >= ' + CAST(@Paper_AuthorOrderStart AS nvarchar(MAX)) + '
		'; 

	IF (@Paper_AuthorOrderEnd IS NOT NULL)
		SET @sql_select_paper = @sql_select_paper + '
			AND PaperAuthor.[Order] <= ' + CAST(@Paper_AuthorOrderEnd AS nvarchar(MAX)) + '
		'; 

	-- Patent Count 
	SET @sql_select_patent = '
		SELECT	Count(*)
		FROM	PatentInventer AS PatentInventer
		WHERE	PatentInventer.ExpertID = Expert.ID
			AND PatentInventer.PatentID IN (SELECT [ID] FROM [ExpertAchieveStatisticIDArray] WHERE [Type] = ' + @patent_type + ')
	'; 

	IF (@Patent_IsPrincipal IS NOT NULL)
		SET @sql_select_Patent = @sql_select_Patent + '
			AND PatentInventer.IsPrincipal = ' + CAST(@Patent_IsPrincipal AS nvarchar(MAX)) + '
		'; 

	IF (@Patent_InvertorOrderStart IS NOT NULL)
		SET @sql_select_Patent = @sql_select_Patent + '
			AND PatentInventer.[Order] >= ' + CAST(@Patent_InvertorOrderStart AS nvarchar(MAX)) + '
		'; 

	IF (@Patent_InvertorOrderEnd IS NOT NULL)
		SET @sql_select_Patent = @sql_select_Patent + '
			AND PatentInventer.[Order] <= ' + CAST(@Patent_InvertorOrderEnd AS nvarchar(MAX)) + '
		'; 

	-- Award Count 
	SET @sql_select_award = '
		SELECT	Count(*)
		FROM	AwardWinner AS AwardWinner
		WHERE	AwardWinner.ExpertID = Expert.ID
			AND AwardWinner.AwardID IN (SELECT [ID] FROM [ExpertAchieveStatisticIDArray] WHERE [Type] = ' + @award_type + ')
	';	

	IF (@Award_WinnerOrderStart IS NOT NULL)
		SET @sql_select_Award = @sql_select_Award + '
			AND AwardWinner.[Order] >= ' + CAST(@Award_WinnerOrderStart AS nvarchar(MAX)) + '
		'; 

	IF (@Award_WinnerOrderEnd IS NOT NULL)
		SET @sql_select_Award = @sql_select_Award + '
			AND AwardWinner.[Order] <= ' + CAST(@Award_WinnerOrderEnd AS nvarchar(MAX)) + '
		'; 

	-- Statistic  
	SET @sql = '
		SELECT 
			Expert.ID AS ExpertID,
			(' + @sql_select_project + ') AS ProjectCount,
			(' + @sql_select_fund + ') AS FundTotal,
			(' + @sql_select_paper + ') AS PaperCount,
			(' + @sql_select_patent + ') AS PatentCount,
			(' + @sql_select_award + ') AS AwardCount

		FROM 
			Expert AS Expert
	';

	--DEBUG
	--SELECT @sql;	

	-- Update  
	TRUNCATE TABLE ExpertAchieveStatistic;
	
	INSERT INTO ExpertAchieveStatistic(ExpertID, ProjectCount, FundTotal, PaperCount, PatentCount, AwardCount)
	EXEC(@sql);

END
GO

IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewStatisticAward]'))
DROP VIEW [dbo].[viewStatisticAward]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewStatisticAward]
AS
SELECT 
	ID AS ID,
	1 AS Amount,

	dbo.fnConvertNullToUnknown([Year]) AS Year_Year,

	dbo.fnConvertNullToUnknown([Rank]) AS RankClass_Rank,
	dbo.fnConvertNullToUnknown([Rank]) + '(' + dbo.fnConvertNullToUnknown([Class]) + ')' AS RankClass_Class,
	dbo.fnConvertNullToUnknown([Rank]) + '(' + dbo.[fnShowAwardClassification](Classification) + '/' + dbo.fnConvertNullToUnknown([Class]) + ')' AS RankClass_Classification,

	dbo.fnConvertNullToUnknown(AttendType) AS AttendType_AttendType,

	dbo.fnConvertNullToUnknown(AuthorisedUnit) AS AuthorisedUnit_AuthorisedUnit,

	dbo.[fnShowAwardClassification](Classification) AS Classification_Classification,

	dbo.fnShowExpertWithNumber(WinnerName, WinnerExpertNumber) AS Winner_Expert,
	dbo.fnConvertNullToUnknown(WinnerCollegeName) AS Winner_College


FROM         
	viewAward AS Award
GO

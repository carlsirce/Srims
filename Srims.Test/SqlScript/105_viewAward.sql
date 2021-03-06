IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewAward]'))
DROP VIEW [dbo].[viewAward]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewAward]
AS

SELECT 
	Award.ID AS ID,
	Award.Name AS [Name],
	Award.[Year] AS [Year],
	Award.[Rank] AS [Rank],
	Award.[Class] AS [Class],
	Award.AttendType AS AttendType,
	Award.Introduction AS Introduction,
	Award.AuthorisedUnit AS AuthorisedUnit,
	Award.Classification AS Classification,
	Award.Remark AS Remark,

	Winner.ID AS WinnerID,
	Winner.Name AS WinnerName,
	Winner.[Order] AS WinnerOrder,

	WinnerExpert.ID AS WinnerExpertID,
	WinnerExpert.Number AS WinnerExpertNumber,
	WinnerExpert.NameSpell AS WinnerExpertNameSpell,

	WinnerCollege.ID AS WinnerCollegeID,
	WinnerCollege.Name AS WinnerCollegeName

FROM         
	Award AS Award
	
	LEFT OUTER JOIN AwardWinner AS Winner ON Award.ID = Winner.AwardID AND Winner.[Order] = 1
	LEFT OUTER JOIN Expert AS WinnerExpert ON WinnerExpert.ID = Winner.ExpertID
	LEFT OUTER JOIN Department AS WinnerCollege ON WinnerCollege.ID = WinnerExpert.CollegeID

GO
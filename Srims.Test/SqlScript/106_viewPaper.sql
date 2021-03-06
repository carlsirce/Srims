IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewPaper]'))
DROP VIEW [dbo].[viewPaper]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewPaper]
AS

SELECT 
	Paper.ID AS ID,
	Paper.Name AS [Name],
	Paper.MagazineID AS MagazineID,
	Paper.Type AS [TypeValue],
	dbo.fnShowPaperType(Paper.Type) AS [Type],
	Paper.CiteFrequency AS CiteFrequency,
	Paper.PublishDateYear AS PublishDateYear,
	Paper.PublishDate AS PublishDate,
	Paper.DocumentNumber AS DocumentNumber,
	Paper.Volume AS Volume,
	Paper.StartPage AS StartPage,
	Paper.EndPage AS EndPage,
	Paper.Pages AS Pages,
	Paper.SubAirer AS ActualSubAirer,
	dbo.fnGetPaperSubArier(Paper.SubAirer, Paper.MagazineID) AS SubAirer,
	Paper.InfluenceFactor AS InfluenceFactor,
	Paper.AuthorKeyWord AS AuthorKeyWord,
	Paper.KeyWord AS KeyWord,
	Paper.Abstract AS Abstract,
	Paper.LinkManAddress AS LinkManAddress,
	Paper.LinkManEmail AS LinkManEmail,
	Paper.LinkManSignUnit AS LinkManSignUnit,
	Paper.FirstAuthorSignUnit AS FirstAuthorSignUnit,
	Paper.SignOrder AS SignOrderValue,
	dbo.fnShowPaperType(Paper.SignOrder) AS SignOrder,
	Paper.Lab AS Lab,
	Paper.ISIUniqueArticleIdentifier AS ISIUniqueArticleIdentifier,
	Paper.Remark AS Remark,

	College.ID AS CollegeID,
	College.Name AS CollegeName,

	LinkMan.ID AS LinkManID,
	LinkMan.Name AS LinkManName,
	LinkMan.[Order] AS LinkManOrder,

	LinkManExpert.ID AS LinkManExpertID,
	LinkManExpert.Number AS LinkManExpertNumber,
	LinkManExpert.NameSpell AS LinkManExpertNameSpell,

	LinkManCollege.ID AS LinkManCollegeID,
	LinkManCollege.Name AS LinkManCollegeName,

	FirstAuthor.ID AS FirstAuthorID,
	FirstAuthor.Name AS FirstAuthorName,
	FirstAuthor.[Order] AS FirstAuthorOrder,

	FirstAuthorExpert.ID AS FirstAuthorExpertID,
	FirstAuthorExpert.Number AS FirstAuthorExpertNumber,
	FirstAuthorExpert.NameSpell AS FirstAuthorExpertNameSpell,

	FirstAuthorCollege.ID AS FirstAuthorCollegeID,
	FirstAuthorCollege.Name AS FirstAuthorCollegeName,

	dbo.fnIsPaperIndexed(Paper.ID, 1) AS SCI,
	dbo.fnIsPaperIndexed(Paper.ID, 2) AS SCICD,
	dbo.fnIsPaperIndexed(Paper.ID, 3) AS SCINetWork,
	dbo.fnIsPaperIndexed(Paper.ID, 4) AS EI,
	dbo.fnIsPaperIndexed(Paper.ID, 5) AS EICore,
	dbo.fnIsPaperIndexed(Paper.ID, 6) AS EINetWork,
	dbo.fnIsPaperIndexed(Paper.ID, 7) AS ISTP,

	dbo.fnGetPaperIndexedString(Paper.ID) AS IndexedString

FROM         
	Paper AS Paper

	LEFT OUTER JOIN Department AS College ON Paper.CollegeID = College.ID

	LEFT OUTER JOIN PaperAuthor AS LinkMan ON Paper.ID = LinkMan.PaperID AND LinkMan.IsLinkMan = 1
	LEFT OUTER JOIN Expert AS LinkManExpert ON LinkManExpert.ID = LinkMan.ExpertID
	LEFT OUTER JOIN Department AS LinkManCollege ON LinkManCollege.ID = LinkManExpert.CollegeID

	LEFT OUTER JOIN PaperAuthor AS FirstAuthor ON Paper.ID = FirstAuthor.PaperID AND FirstAuthor.[Order] = 1
	LEFT OUTER JOIN Expert AS FirstAuthorExpert ON FirstAuthorExpert.ID = FirstAuthor.ExpertID
	LEFT OUTER JOIN Department AS FirstAuthorCollege ON FirstAuthorCollege.ID = FirstAuthorExpert.CollegeID
GO
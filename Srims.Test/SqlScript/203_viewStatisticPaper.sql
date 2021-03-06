IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewStatisticPaper]'))
DROP VIEW [dbo].[viewStatisticPaper]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewStatisticPaper]
AS
SELECT 
	ID AS ID,
	1 AS Amount,

	dbo.fnConvertNullToUnknown(PublishDateYear) AS PublishDateYear_Year,

	dbo.fnConvertNullToUnknown(IndexedString) AS Indexed_Indexed,

	dbo.fnConvertNullToUnknown(CollegeName) AS College_College,

	dbo.fnShowExpertWithNumber(LinkManName, LinkManExpertNumber) AS LinkMan_Expert,
	dbo.fnConvertNullToUnknown(LinkManCollegeName) AS LinkMan_College,

	dbo.fnShowExpertWithNumber(FirstAuthorName, FirstAuthorExpertNumber) AS FirstAuthor_Expert,
	dbo.fnConvertNullToUnknown(FirstAuthorCollegeName) AS FirstAuthor_College,

	dbo.fnConvertNullToUnknown([Type]) AS [Type_Type],

	dbo.fnConvertNullToUnknown(SubAirer) AS SubAirer_SubAirer
	
FROM         
	viewPaper AS Paper
GO

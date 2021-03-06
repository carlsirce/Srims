IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[viewStatisticPatent]'))
DROP VIEW [dbo].[viewStatisticPatent]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[viewStatisticPatent]
AS
SELECT 
	ID AS ID,
	1 AS Amount,

	dbo.fnDateToYearString(ApplicationDateTime) AS ApplicationDateTime_Year,
	dbo.fnDateToYearMonthString(ApplicationDateTime) AS ApplicationDateTime_YearMonth,
	dbo.fnDateToYearMonthDayString(ApplicationDateTime) AS ApplicationDateTime_YearMonthDay,

	dbo.fnDateToYearString(AuthorizeDateTime) AS AuthorizeDateTime_Year,
	dbo.fnDateToYearMonthString(AuthorizeDateTime) AS AuthorizeDateTime_YearMonth,
	dbo.fnDateToYearMonthDayString(AuthorizeDateTime) AS AuthorizeDateTime_YearMonthDay,

	dbo.fnConvertNullToUnknown(LawState) AS LawState_LawState,

	dbo.fnDateToYearString(LawStateTime) AS LawStateTime_Year,
	dbo.fnDateToYearMonthString(LawStateTime) AS LawStateTime_YearMonth,
	dbo.fnDateToYearMonthDayString(LawStateTime) AS LawStateTime_YearMonthDay,

	dbo.fnConvertNullToUnknown(Category) AS Category_Category,

	dbo.fnConvertNullToUnknown([Type]) AS Type_Type,

	dbo.fnConvertNullToUnknown([Level]) AS Level_Level,

	dbo.fnConvertNullToUnknown(CollegeName) AS College_College,

	dbo.fnShowExpertWithNumber(PrincipalName, PrincipalExpertNumber) AS Principal_Expert,
	dbo.fnConvertNullToUnknown(PrincipalCollegeName) AS Principal_College

FROM         
	viewPatent AS Patent
GO

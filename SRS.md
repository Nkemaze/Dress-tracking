Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
SOFTWARE REQUIREMENTS SPECIFICATION
Smart Dress Tracking &
Outfit Recommendation System
Mobile Application
Document Version1.0
DateMarch 2026
StatusDraft
PlatformiOS & Android (Mobile)
Page 1 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
Table of Contents
Page 2 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
1. Introduction
1.1 Purpose
This Software Requirements Specification (SRS) document defines the functional and non-
functional requirements for the Smart Dress Tracking & Outfit Recommendation System — a mobile
application designed to help users organize their wardrobe, plan outfits, and build smarter personal
dressing habits. This document serves as the authoritative reference for developers, designers,
testers, and stakeholders throughout the software development lifecycle.
1.2 Scope
The Smart Dress Tracking & Outfit Recommendation System is a personal lifestyle mobile
application targeted at Android and iOS platforms. The application enables users to:
•
•
•
•
•
Digitally catalog and manage their personal wardrobe
Schedule outfits against daily programs and events
Receive intelligent outfit recommendations based on history and preferences
Track outfit usage and receive daily reminders
Gain actionable insights through an analytics dashboard
The system is designed for individual use as a personal productivity tool. It does not include social
networking features in its initial scope but is architected for future extensibility.
1.3 Definitions, Acronyms, and Abbreviations
TermDefinition
SRSSoftware Requirements Specification
UIUser Interface
UXUser Experience
APIApplication Programming Interface
CRUDCreate, Read, Update, Delete
JWTJSON Web Token — used for secure session authentication
OSOperating System (iOS or Android)
Push NotificationA server-initiated message sent to the user's mobile device
OutfitA specific dress/clothing item assigned to a particular day
ProgramA recurring or scheduled event (e.g., work, church, gym)
TimetableAn auto-generated or manually crafted weekly outfit schedule
RotationThe system's mechanism for distributing dress usage evenly over time
1.4 References
Page 3 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
•
•
•
•
IEEE Std 830-1998 — IEEE Recommended Practice for Software Requirements
Specifications
Material Design 3 Guidelines — Google's mobile UI design system
Apple Human Interface Guidelines — iOS design principles
OWASP Mobile Security Testing Guide
1.5 Overview
The remainder of this document is organized as follows: Section 2 provides an overall system
description. Section 3 details the specific functional requirements. Section 4 covers non-functional
requirements. Section 5 addresses system constraints. Section 6 outlines the data requirements
and Section 7 presents appendices.
Page 4 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
2. Overall Description
2.1 Product Perspective
The Smart Dress Tracking & Outfit Recommendation System is a standalone mobile application. It
operates as a self-contained personal productivity tool with a local-first data storage model,
supplemented by cloud synchronization for backup and multi-device access. The application does
not depend on any third-party wardrobe service but is designed with open APIs to support future
integrations such as weather services, e-commerce platforms, or social sharing modules.
2.2 Product Functions
At a high level, the application provides the following core functional areas:
1. User Authentication — Secure registration, login, and session management
2. Wardrobe Management — Full CRUD operations on clothing items with rich metadata
3. Dress Combination Engine — Generate and manage all possible outfit pairings from
individual clothing pieces
4. Program & Event Management — Define recurring programs tied to days and dress
categories
5. Outfit Scheduling & Timetable Generation — Auto-generate and manually adjust outfit plans
6. Smart Recommendation Engine — AI-assisted outfit suggestions based on wear history
7. Notification System — Daily reminders for the next day's planned outfit
8. Feedback & Tracking — Post-event feedback on program adherence and outfit changes
9. Analytics Dashboard — Visual insights into wardrobe usage patterns
2.3 User Classes and Characteristics
User ClassDescriptionTechnical Level
Primary UserIndividual who manages their personal wardrobe and
plans daily outfitsLow to Medium
AdministratorSystem/backend administrator managing app
infrastructure and user supportHigh
The primary target audience is adults aged 18–45 who are motivated to improve their personal
organization and wardrobe efficiency. No technical expertise is required to use the application.
2.4 Operating Environment
ComponentSpecification
Mobile PlatformsAndroid 10.0+ and iOS 15.0+
BackendCloud-hosted RESTful API server (Node.js / Python / Java)
DatabaseCloud database (PostgreSQL or Firebase Firestore)
NetworkInternet connectivity required for sync; core features available offline
Page 5 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
ComponentSpecification
AuthenticationJWT-based token authentication with refresh token rotation
Color SystemPredefined application-managed color palette; no media storage
required
2.5 Design and Implementation Constraints
•
•
•
•
•
•
The application must comply with App Store (Apple) and Google Play Store submission
guidelines
All user data must be encrypted in transit (TLS 1.2+) and at rest (AES-256)
The app must support both portrait and landscape orientations on tablets
Push notifications must comply with APNS (iOS) and FCM (Android) standards
The recommendation engine must function with as few as 3 clothing items in the wardrobe
Dress identification in the UI shall rely on color indicators and metadata; no image uploads
are supported in v1.0
2.6 Assumptions and Dependencies
•
•
•
•
Users have a stable internet connection for initial setup and data synchronization
Users grant notification permissions for reminder functionality to operate
The backend infrastructure is deployed and maintained separately from the mobile client
Future features (weather API, image uploads, social sharing) will require additional third-
party integrations
Page 6 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
3. Specific Functional Requirements
3.1 User Authentication Module
This module governs all user identity management operations within the application.
3.1.1 User Registration
IDRequirement
FR-101The system shall allow new users to register using a valid email address and password.
FR-102The system shall validate that the email address is in correct format before submission.
FR-103The system shall enforce a minimum password length of 8 characters with at least one
uppercase letter, one number, and one special character.
FR-104The system shall send an email verification link upon successful registration.
FR-105The system shall prevent duplicate account creation with the same email address.
FR-106Users may optionally register or log in using Google or Apple OAuth 2.0.
3.1.2 User Login & Session Management
IDRequirement
FR-111The system shall authenticate users via email/password or OAuth provider.
FR-112The system shall issue a JWT access token (15-minute expiry) and a refresh token (30-
day expiry) upon successful login.
FR-113The system shall automatically refresh the access token using the refresh token without
requiring re-login.
FR-114The system shall allow users to log out, invalidating all active tokens.
FR-115The system shall lock the account for 15 minutes after 5 consecutive failed login
attempts.
FR-116The system shall provide a password reset flow via email OTP.
3.2 Wardrobe Management Module
This module allows users to build and maintain a comprehensive digital catalog of their clothing
items.
3.2.1 Adding a Dress
IDRequirement
FR-201The system shall allow users to add a new dress item with the following attributes:
Name, Category (Formal, Casual, Sport, Traditional, Lounge), Primary Color, Secondary
Color, Tags (e.g., Favorite, New, Rarely Worn), and Last Worn Date.
Page 7 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
IDRequirement
FR-202The system shall provide a predefined color palette for users to select the primary and
secondary color of each dress item, enabling visual identification in the wardrobe list.
FR-203The system shall auto-populate the 'Last Worn Date' field when a dress is logged as
worn.
FR-204The system shall allow users to add optional notes or a brief description to each dress
item.
FR-205The system shall support multiple tags per dress item.
FR-206Each dress card in the wardrobe list shall display a color swatch derived from the item's
selected primary and secondary colors for quick visual identification.
3.2.2 Editing and Deleting a Dress
IDRequirement
FR-211The system shall allow users to edit any attribute of an existing dress item.
FR-212The system shall allow users to delete a dress item with a confirmation prompt.
FR-213Deleting a dress item shall remove it from all future timetable entries but preserve
historical wear records for analytics.
FR-214The system shall support bulk deletion of multiple dress items.
3.2.3 Browsing and Filtering the Wardrobe
IDRequirement
FR-221The system shall display the wardrobe as a grid or list view togglable by the user.
FR-222The system shall allow users to filter the wardrobe by category, color, tag, or last worn
date range.
FR-223The system shall provide a search function that matches on dress name, color, and tags.
FR-224The system shall sort the wardrobe by most recently added, last worn, or alphabetically.
3.3 Dress Combination Engine Module
This module enables users to register individual clothing pieces (tops, bottoms, footwear,
accessories) separately and have the system automatically generate every possible outfit
combination from those pieces. The user then reviews the generated combinations and decides
which to keep or discard, building a curated library of complete outfits.
3.3.1 Registering Clothing Pieces
IDRequirement
FR-301The system shall allow users to add individual clothing pieces with the following
Page 8 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
ID
Requirement
attributes: Name, Piece Type (Top, Bottom, Footwear, Accessory, Outerwear), Category
(Formal, Casual, Sport, Traditional, Lounge), Primary Color, Secondary Color, Tags, and
Last Worn Date.
FR-302The system shall maintain a separate inventory of individual clothing pieces distinct from
the full-dress wardrobe list.
FR-303The system shall allow users to edit or delete any registered clothing piece.
FR-304Deleting a clothing piece shall flag all saved combinations that included it as 'Incomplete'
and notify the user.
FR-305The system shall display each clothing piece as a color-coded card showing its Piece
Type, name, and primary/secondary color swatches.
3.3.2 Generating Combinations
IDRequirement
FR-311The system shall allow the user to initiate a combination generation session by selecting
a set of tops and a set of bottoms (minimum 1 top and 1 bottom required).
FR-312The system shall compute and display all possible Top + Bottom pairings from the
selected pieces (e.g., 3 tops x 4 bottoms = 12 combinations).
FR-313The user may optionally include Footwear and/or Accessory pieces in the generation
session; the system shall extend combinations accordingly (e.g., Top + Bottom + Shoe).
FR-314The system shall display each generated combination as a combination card showing:
combination number, piece names, and a combined color swatch row representing each
piece's color.
FR-315The system shall indicate the total number of combinations generated before the user
begins reviewing.
FR-316The system shall not generate duplicate combinations within the same session.
3.3.3 Reviewing and Managing Combinations
IDRequirement
FR-321The system shall present generated combinations in a scrollable review screen where
the user can act on each combination individually.
FR-322For each combination, the user shall be able to: Keep (save to their Outfit Library),
Discard (remove from the session), or Skip (defer the decision).
FR-323The system shall allow the user to assign a custom name to any kept combination before
saving it.
FR-324The system shall allow the user to assign a category and tags to a kept combination at
save time.
FR-325Kept combinations shall be stored in an Outfit Library and treated as complete outfit
entries usable in scheduling and recommendations.
Page 9 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
IDRequirement
FR-326The user shall be able to re-review skipped combinations at any time from within the
combination session history.
FR-327The system shall allow the user to delete any saved combination from the Outfit Library
at any time, with a confirmation prompt.
FR-328Deleting a saved combination shall remove it from all future timetable entries but
preserve any historical wear records for analytics.
3.3.4 Outfit Library
IDRequirement
FR-331The system shall maintain an Outfit Library as a distinct section within the app displaying
all user-kept combinations.
FR-332The Outfit Library shall display each outfit with its name, constituent pieces, combined
color swatches, category, tags, and last worn date.
FR-333The system shall allow users to filter and search the Outfit Library by category, color,
tags, or constituent piece name.
FR-334Outfits in the Outfit Library shall be available as selectable options in the Timetable and
Recommendation modules in addition to single-piece dresses.
FR-335The system shall display a badge on each outfit card showing how many times it has
been worn.
3.4 Program & Event Management Module
Programs represent recurring activities or events that drive the user's outfit scheduling needs.
IDRequirement
FR-401The system shall allow users to create programs with a name, description, assigned
days of the week, and a preferred dress category.
FR-402The system shall support predefined program types: Work, Church, Gym, Outing,
School, and Custom.
FR-403The system shall allow multiple programs to be assigned to the same day.
FR-404The system shall allow users to edit or delete existing programs.
FR-405Deleting a program shall remove all associated future timetable entries and notify the
user before proceeding.
FR-406The system shall allow a program to be temporarily deactivated without deletion (e.g., for
holidays or vacations).
3.5 Outfit Scheduling & Timetable Generation Module
Page 10 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
IDRequirement
FR-501The system shall auto-generate a weekly timetable by assigning outfit recommendations
to each program-linked day.
FR-502The timetable shall respect the dress category linked to each program when selecting
outfits; both single-piece dresses and saved combinations from the Outfit Library shall be
considered.
FR-503The system shall regenerate the timetable upon user request or when a new program is
added.
FR-504The system shall allow users to manually override any auto-assigned outfit on the
timetable.
FR-505The system shall display the timetable in a week-view calendar format showing program
name, assigned outfit, and day.
FR-506The system shall allow the timetable to be extended to a bi-weekly or monthly view.
FR-507The system shall highlight days where no suitable outfit is available due to wardrobe
gaps.
3.6 Smart Recommendation Engine
The recommendation engine is the intelligence layer of the application that ensures variety,
relevance, and personalization in outfit selection. It draws from both the single-piece wardrobe and
the Outfit Library.
IDRequirement
FR-601The system shall recommend outfits that have not been worn within a configurable
period (default: 7 days) to enforce rotation.
FR-602The system shall prioritize outfits tagged 'Favorite' for programs marked as high
importance.
FR-603The system shall de-prioritize outfits tagged 'Rarely Worn' and gradually include them in
the rotation to improve wardrobe utilization.
FR-604The system shall factor in the user's wear history over the past 30 days to diversify
recommendations.
FR-605The system shall improve recommendation relevance over time by learning from the
user's feedback responses.
FR-606The system shall allow the user to configure recommendation sensitivity (strict rotation
vs. flexible rotation).
FR-607When no suitable outfit is available for a program's category, the system shall notify the
user and suggest the closest alternative.
FR-608The recommendation engine shall treat a saved combination from the Outfit Library as a
single recommendable unit, selecting it as a whole outfit.
3.7 Notification Module
Page 11 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
IDRequirement
FR-701The system shall send a push notification to the user the evening before (default: 8:00
PM) reminding them of their planned outfit for the next day.
FR-702The system shall allow users to customize the notification time within Settings.
FR-703The system shall allow users to enable or disable notifications globally or per program.
FR-704Notification content shall include the program name, date, assigned outfit name, and the
outfit's color label for quick identification.
FR-705The system shall handle notification delivery failures gracefully and retry once within 30
minutes.
3.8 Feedback & Tracking Module
This module captures post-event user behavior to improve recommendations and maintain accurate
wear history.
IDRequirement
FR-801After a scheduled program day, the system shall prompt the user with a brief feedback
form: 'Did this program take place?' (Yes/No).
FR-802If the program took place, the system shall ask: 'Did you wear the suggested outfit?'
(Yes/No).
FR-803If the user did not wear the suggested outfit, the system shall prompt them to select a
reason: Weather, Mood, Laundry Issues, Outfit Unavailable, or Other.
FR-804The system shall allow the user to log the outfit they actually wore, selecting either a
single-piece dress or a saved combination from the Outfit Library.
FR-805The system shall update the Last Worn Date of the dress or combination actually worn
based on feedback.
FR-806Feedback submissions shall be stored and used to refine future recommendations.
FR-807Users may skip the feedback prompt; skipped entries shall be recorded as 'No
Response'.
3.9 Analytics Dashboard Module
IDRequirement
FR-901The system shall display a summary dashboard showing total dresses, total clothing
pieces, total saved combinations, total programs, and the current week's schedule
adherence rate.
FR-902The system shall display the top 5 most worn outfits (single-piece or combination) with
wear count and last worn date.
FR-903The system shall display the 5 least worn outfits with days since last worn.
FR-904The system shall display a monthly consistency chart showing the percentage of
Page 12 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
ID
Requirement
program days the user followed the recommended outfit.
FR-905The system shall display a breakdown of outfit usage by category (Formal, Casual,
Sport, etc.) as a pie chart.
FR-906The system shall allow the user to filter analytics by date range (last 7 days, 30 days, 3
months, custom).
FR-907The system shall provide a 'Wardrobe Gap' report showing categories with fewer than 3
available outfits or combinations.
FR-908The system shall display a Combinations Overview showing: total combinations
generated, total kept, total discarded, and the most-worn combination.
Page 13 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
4. Non-Functional Requirements
4.1 Performance Requirements
IDRequirement
NFR-101The application shall launch (cold start) in under 3 seconds on a mid-range mobile
device.
NFR-102All API responses shall be returned within 2 seconds under normal network conditions
(4G/Wi-Fi).
NFR-103Wardrobe list pages shall render within 1 second for up to 500 dress items.
NFR-104The timetable generation algorithm shall complete and display results within 3 seconds.
4.2 Security Requirements
IDRequirement
NFR-201All data transmission between the mobile client and server shall be encrypted using TLS
1.2 or higher.
NFR-202All user passwords shall be hashed using bcrypt (minimum cost factor 12) before
storage.
NFR-203User data stored on the device shall be encrypted using the device's secure enclave or
equivalent.
NFR-204The system shall not log or transmit personally identifiable information (PII) in error logs.
NFR-205The application shall implement certificate pinning to prevent man-in-the-middle attacks.
NFR-206Access tokens shall expire within 15 minutes; refresh tokens shall expire within 30 days.
4.3 Usability Requirements
IDRequirement
NFR-301The application UI shall follow platform-specific design guidelines (Material Design 3 for
Android, HIG for iOS).
NFR-302New users shall be able to complete onboarding (registration, add 3 dresses, create 1
program) within 5 minutes.
NFR-303All primary actions (add dress, view timetable, give feedback) shall be reachable within 3
taps from the home screen.
NFR-304The application shall support both light and dark mode, respecting the device's system
preference.
NFR-305The application shall be accessible to users with visual impairments by supporting
screen readers (VoiceOver on iOS, TalkBack on Android).
Page 14 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
IDRequirement
NFR-306The application shall support text scaling up to 150% without layout breakage.
4.4 Reliability & Availability
IDRequirement
NFR-401The backend service shall maintain 99.5% uptime measured monthly.
NFR-402The application shall support offline access to the timetable and wardrobe data, syncing
changes when connectivity is restored.
NFR-403The application shall not lose user data in the event of an unexpected crash; all writes
shall be atomic.
NFR-404The system shall implement automatic database backups every 24 hours with a 30-day
retention policy.
4.5 Scalability
IDRequirement
NFR-501The backend architecture shall support horizontal scaling to accommodate up to 100,000
concurrent users.
NFR-502The database schema shall support up to 1,000 dress items per user without
performance degradation.
NFR-503The system architecture shall be modular to allow future feature modules (weather
integration, social sharing) to be added without restructuring core components.
4.6 Maintainability
IDRequirement
NFR-601The codebase shall achieve a minimum test coverage of 80% across unit and integration
tests.
NFR-602The application shall implement structured logging to enable monitoring and debugging
in production.
NFR-603All API endpoints shall be versioned (e.g., /api/v1/) to support backward compatibility
during updates.
NFR-604The system shall support over-the-air (OTA) configuration updates for feature flags
without requiring an app store release.
Page 15 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
5. System Constraints
5.1 Platform Constraints
•
•
•
The application shall target Android 10.0 (API Level 29) and above, and iOS 15.0 and above.
The minimum supported screen resolution is 360 x 640 dp (Android) and 375 x 667 pt (iOS).
Background processing for notifications must comply with OS-imposed background
execution limits.
5.2 Regulatory & Compliance Constraints
•
•
•
The application shall comply with the General Data Protection Regulation (GDPR) for users
in the European Union.
The application shall provide a clear Privacy Policy and Terms of Service accessible within
the app.
The application shall provide a mechanism for users to export or delete their personal data
upon request (Right to Erasure).
5.3 Business Constraints
•
•
Version 1.0 of the application shall be delivered within the project timeline without weather
API or social sharing integration.
The recommendation engine in v1.0 shall use rule-based logic; machine learning
enhancements are deferred to future versions.
Page 16 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
6. Data Requirements
6.1 Logical Data Model
The following entities form the core data model of the application:
6.1.1 User
FieldTypeDescription
user_idUUIDUnique identifier (Primary Key)
emailStringUnique email address
password_hashStringBcrypt-hashed password
full_nameStringUser's display name
created_atTimestampAccount creation date
last_loginTimestampLast successful login timestamp
notification_timeTimeUser's preferred notification time
notification_enabledBooleanGlobal notification toggle
FieldTypeDescription
dress_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
nameStringDress item name
categoryEnumFormal | Casual | Sport | Traditional | Lounge
primary_colorStringPrimary color (from predefined palette)
secondary_colorStringSecondary color (from predefined palette, nullable)
tagsArray<String>e.g., Favorite, New, Rarely Worn
last_worn_dateDateMost recent wear date (nullable)
notesStringOptional user notes
is_activeBooleanFalse if deleted (soft delete)
created_atTimestampRecord creation timestamp
6.1.2 Dress
6.1.3 ClothingPiece
Represents an individual garment piece that can participate in combination generation.
Field
Type
Description
Page 17 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
FieldTypeDescription
piece_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
nameStringPiece name (e.g., 'Blue Oxford Shirt')
piece_typeEnumTop | Bottom | Footwear | Accessory | Outerwear
categoryEnumFormal | Casual | Sport | Traditional | Lounge
primary_colorStringPrimary color (from predefined palette)
secondary_colorStringSecondary color (nullable)
tagsArray<String>e.g., Favorite, New, Rarely Worn
last_worn_dateDateMost recent wear date (nullable)
notesStringOptional user notes
is_activeBooleanFalse if deleted (soft delete)
created_atTimestampRecord creation timestamp
6.1.4 OutfitCombination
Represents a complete outfit saved by the user from a combination generation session. Stored in
the Outfit Library.
FieldTypeDescription
combination_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
nameStringUser-assigned name for the combination
piece_idsArray<UUID>Ordered list of ClothingPiece IDs that form this outfit
categoryEnumFormal | Casual | Sport | Traditional | Lounge
tagsArray<String>User-assigned tags
last_worn_dateDateMost recent date this combination was worn (nullable)
wear_countIntegerTotal number of times this combination has been worn
statusEnumActive | Incomplete (set when a constituent piece is
deleted)
created_atTimestampRecord creation timestamp
6.1.5 CombinationSession
Tracks each combination generation session for history and re-review of skipped combinations.
Field
Type
Description
Page 18 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
FieldTypeDescription
session_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
selected_piece_idsArray<UUID>Pieces included in the generation session
total_generatedIntegerTotal number of combinations produced
total_keptIntegerNumber saved to Outfit Library
total_discardedIntegerNumber discarded by user
total_skippedIntegerNumber deferred for later review
created_atTimestampSession creation timestamp
FieldTypeDescription
program_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
nameStringProgram name (e.g., Work, Church)
descriptionStringOptional description
days_of_weekArray<Enum>Mon | Tue | Wed | Thu | Fri | Sat | Sun
preferred_categoryEnumLinked dress category
is_activeBooleanActive/Inactive toggle
importanceEnumHigh | Medium | Low
6.1.6 Program
6.1.7 TimetableEntry
FieldTypeDescription
entry_idUUIDUnique identifier (Primary Key)
user_idUUIDForeign key to User
program_idUUIDForeign key to Program
dress_idUUIDForeign key to Dress (assigned outfit)
scheduled_dateDateTarget date for this entry
is_manual_overrideBooleanTrue if user manually changed the assignment
6.1.8 FeedbackEntry
Field
Type
Description
Page 19 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
FieldTypeDescription
feedback_idUUIDUnique identifier (Primary Key)
entry_idUUIDForeign key to TimetableEntry
program_occurredBooleanWhether the program took place
followed_recommend
ationBooleanWhether the suggested outfit was worn
skip_reasonEnumWeather | Mood | Laundry | Unavailable | Other | null
actual_dress_idUUIDDress actually worn (nullable)
submitted_atTimestampFeedback submission timestamp
6.2 Data Retention Policy
•
•
•
•
Active user data (wardrobe, programs, timetable) is retained indefinitely while the account is
active.
Feedback entries and wear history are retained for 24 months for analytics purposes.
Upon account deletion, all personal data shall be purged within 30 days in compliance with
GDPR Article 17.
Database backups are retained for 30 days before automatic deletion.
Page 20 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
7. System Architecture Overview
7.1 High-Level Architecture
The Smart Dress Tracking & Outfit Recommendation System follows a client-server architecture
with the following primary components:
•
•
•
•
•
•
Mobile Client (iOS & Android) — React Native or Flutter cross-platform application
RESTful API Server — Backend service exposing versioned API endpoints
Recommendation Engine — Service module within the backend for outfit suggestions
Database — Relational database (PostgreSQL) for structured data storage
Push Notification Service — Firebase Cloud Messaging (FCM) and APNS
Authentication Service — JWT-based auth with OAuth 2.0 support
7.2 Communication Protocols
CommunicationProtocol/Standard
Client to API ServerHTTPS REST (TLS 1.2+), JSON payload
AuthenticationJWT Bearer tokens, OAuth 2.0
Push NotificationsFCM (Android), APNS (iOS)
DatabaseInternal TCP (SSL encrypted)
Page 21 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
8. Appendices
Appendix A: Use Case Summary
Use Case IDUse Case NameActorPriority
UC-01Register AccountUserHigh
UC-02Login / LogoutUserHigh
UC-03Reset PasswordUserHigh
UC-04Add Dress to WardrobeUserHigh
UC-05Edit / Delete DressUserHigh
UC-06Filter & Search WardrobeUserMedium
UC-07Add Clothing PieceUserHigh
UC-08Generate Outfit CombinationsUser / SystemHigh
UC-09Review & Keep/Discard
CombinationsUserHigh
UC-10Manage Outfit LibraryUserHigh
UC-11Create ProgramUserHigh
UC-12Generate TimetableSystemHigh
UC-13Override Outfit on TimetableUserMedium
UC-14Receive Outfit ReminderSystem / UserHigh
UC-15Submit Outfit FeedbackUserHigh
UC-16View Analytics DashboardUserMedium
UC-17Configure Notification SettingsUserMedium
UC-18Delete Account & DataUserLow
Appendix B: Glossary of Dress Categories
CategoryDescriptionExample Programs
FormalProfessional or ceremonial attireWork, Business Meetings, Interviews
CasualEveryday relaxed clothingOutings, Shopping, General Use
SportAthletic and fitness-oriented clothingGym, Jogging, Sports Practice
TraditionalCultural or religious clothingChurch, Ceremonies, Cultural Events
LoungeComfortable home or sleep attireRest Days, Home Activities
Page 22 of 23Smart Dress Tracking & Outfit Recommendation System | SRS v1.0
Appendix C: Revision History
VersionDateAuthorDescription
1.0March 2026Project TeamInitial SRS draft
End of Software Requirements Specification
Smart Dress Tracking & Outfit Recommendation System — Version 1.0
Page 23 of 23
#  Power Of Repetition
A project to investigate the power of repetition in Chinese media.  

<img src="https://github.com/lizzij/PowerOfRepetition/blob/master/img/Shanghai.gif" alt="Shanghai time lapse" width="880"/>

## Research Questions
**Read [50 pages documentation](https://docs.google.com/document/d/1tng4vsgPXjuKzJaPWZg7eiDzAz9nOl0U7VqSZvYjSCk/edit?usp=sharing) here.**
- In a real-world context of nondemocratic regimes, is repetition by multiple sources effective in persuading people?
- Which design aspects of repetitive message are effective in persuading people?
  - Mere repetition? T1 vs. T2.S
  - Repetition by seemingly difference news sources? T2.S vs. T2.M
  - Repetition over longer (shorter) period of time? T2.M.S vs. T2.M.M
  	If longer period, harder to remember the air quality info (less persuasion)
  	If longer period, harder to remember the source of info (more persuasion)
  - Repetition with(out) attention crowd-out? T2.M.M.N vs. T2.M.M.C
  	With crowd-out info, harder to get exposed to the air quality info (less persuasion)
  	With crowd-out info, harder to get exposed to the source of info (more persuasion)
- Are there ways to counter such persuasion?

<p align="center">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/TreatmentGroup.png" alt="treatment group" width="500"/>
</p>

## Process
###### Collaboration & task management using [project board](https://github.com/lizzij/PowerOfRepetition/projects/1) and [trello](https://trello.com/b/2kwmft8O/chinamedia) (private).
### Chatbot
###### Use Chatbot to distribute webpage links and reminders to 2000 participants
- [x] Setup Wechat account API base on Wechat Protocol and package capture.
  - [x] Test able to send sensitive information and text. :thumbsup:
  - [x] Add friends, start 1-to-1 chat using ids from .cvs.
- [x] Obtain WeChat Id, maintain and test.
  - [x] Google Voice account cannot train bots
  - [x] Recently registered account cannot train bots
  - [x] 1 year-old account can train bots
    - [x] test passed! :tada: 30 messages in 1 minute (2 sec gaps in between)
    - [x] test passed! :tada: 300 messages in 10 minute (2 sec gaps in between)
    - [x] test passed! :tada: 500 messages in 60 minute (7.2 sec gaps in between)
- [x] Notification system
<p align="center">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/Notifications.png" alt="Notification system logic" width="700"/>
</p>

### Database
###### mySQL
- [x] Setup mySQL database
- [x] Connect with website for Id, input
- [x] Database design
<p align="center">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/Database.png" alt="Database design" width="800"/>
</p>

### Website
###### Unique hashed links to information page, leading to survey page
- [x] Test Qualtrics: too slow :disappointed:
- [x] Test wjx.cn: censorship :see_no_evil:
- [x] Build our own website, server + database! :woman_shrugging:
  - [x] Bare minimum website on local host
  - [x] Set up Vultr server and domain name
  - [x] Get certificate, setup domain name,
  - [x] Solve issue (too slow)
  - [x] Test and solve connection issue with [ping](http://ping.chinaz.com/202.182.126.239)
- [x] Information provision page
  - [x] [Design version 1](#design-version-1)
  - [x] [Design version2](#design-version-2)
    - [x] Realize version 2 in code
  - [x] [Design version 3](#design-version-3)
    - [x] Realize version 3 in code
- [x] Survey   
  - [x] Survey version 1
  - [x] [Survey version 2](#Survey) design and realization

#### Design version 1
<p float="left">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV1.png" alt="InfoPageUIChnV1" height="700"/>
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIEngV1.png" alt="InfoPageUIEngV1" height="700"/>
</p>

#### Design version 2
<p float="left">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV2-1.png" alt="InfoPageUIChnV2-1" height="783"/>
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV2-2.png" alt="InfoPageUIChnV2-2" height="783"/>
</p>

#### [Design version 3](https://www.figma.com/proto/OwA6rIAScWCqCqxUQizJ8B7W/PowerOfRep?node-id=0%3A1&viewport=1905%2C363%2C1&scaling=scale-down)
<p float="left">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV3-1.png" alt="InfoPageUIChnV3-1" height="775"/>
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV3-2.png" alt="InfoPageUIChnV3-2" height="775"/>
</p>


#### Survey
- [x] Prototype: [Qualtrics sample](https://neu.co1.qualtrics.com/jfe/form/SV_e5JFwqLxYHoI4D3), additional features:
  - [x] Customize slider
  - [x] 60 seconds count down
  - [x] Customize star rating (sums to 12 logic)
  - [x] Improve flow and aesthetics
  <p float="left">
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP1.png" alt="surveyP1" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP2.png" alt="surveyP2" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP3.png" alt="surveyP3" width="280"/>
  </p>
  <p float="left">
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP4.png" alt="surveyP4" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP4-1.png" alt="surveyP4-1" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP4-2.png" alt="surveyP4-2" width="280"/>
  </p>
  <p float="left">
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP4-3.png" alt="surveyP4-3" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP4-4.png" alt="surveyP4-4" width="280"/>
    <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/surveyP5.png" alt="surveyP5" width="280"/>
  </p>

## Demo
- Navigate to [media](https://github.com/lizzij/media) for web app's instructions and demo links.
- Navigate to [chatbot](https://github.com/lizzij/PowerOfRepetition/tree/master/distribution/chatbot) for chatbot's result and demo steps.

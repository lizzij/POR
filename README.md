#  Power Of Repetition
A project to investigate the power of repetition in Chinese media.

<img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/shanghai.gif" alt="Shanghai time lapse" width="880"/>

## Progress
### Chatbot
###### Use Chatbot to send messages to 2000 participants
- [x] Setup Wechat account API base on Wechat Protocol and package capture.
  - [x] Test able to send sensitive information and text. :thumbsup:
  - [ ] Add friends, start 1-to-1 chat using ids from .cvs.
- [x] Obtain WeChat Id, maintain and test.
  - [x] Google Voice account cannot train bots
  - [x] Recently registered account cannot train bots
  - [x] 1 year-old account can train bots
    - [x] test passed! :tada: 30 messages in 1 minute (2 sec gaps in between)
    - [x] test passed! :tada: 300 messages in 10 minute (2 sec gaps in between)
    - [x] test passed! :tada: 500 messages in 60 minute (7.2 sec gaps in between)

### Database
###### mySQL
- [x] Setup mySQL database
- [ ] Connect with website for Id, input

### Website
###### For providing information and collecting surveys
- [x] Test Qualtrics: too slow :disappointed:
- [x] Test wjx.cn: censorship :see_no_evil:
- [ ] Build our own website, server + database! :woman_shrugging:
  - [x] Bare minimum website on local host
  - [x] Set up Vultr server and domain name
  - [ ] Get certificate, setup domain name,
  - [ ] solve issue (too slow)
- [x] Information provision page
  - [x] [Design version 1](#design-version-1)
  - [x] [Design version2](#design-version-2)
  - [ ] Realize version 2 in code
- [ ] Survey page  

#### Design version 1
<p float="left">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChn.png" alt="InfoPageUIChn" height="700"/>
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIEng.png" alt="InfoPageUIEng" height="700"/>
</p>

#### Design [version 2](https://www.figma.com/proto/OwA6rIAScWCqCqxUQizJ8B7W/PowerOfRep?node-id=0%3A1&viewport=1478%2C414%2C0.895161&scaling=contain)
<p float="left">
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV2-1.png" alt="InfoPageUIChnV2-1" height="783"/>
  <img src="https://github.com/lizzij/PowerOfRepetition/raw/master/img/InfoPageUIChnV2-2.png" alt="InfoPageUIChnV2-2" height="783"/>
</p>

#### Survey

## Developing...
### Todos
[trello board](https://trello.com/b/2kwmft8O/chinamedia)
- [ ] connect database with Website
- [ ] survey form
- [x] website realization
- [X] design website

### Clarifications
- [ ] ...

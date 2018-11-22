#  Power Of Repetition
A project to investigate the power of repetition in Chinese media using WeChat

## Steps
----
###### in 4 steps, from small scale to lareg scale
### Testing itchat + csv
* Setup Wechat account API base on Wechat Protocol and package capture
  * Obtain 10 WeChat Id and maintian them
  * Test with friends (small scale)
* Setup 1-to-1 chat
  * Obtain Wechat id in .csv
  * Add friends by Wechat id
  * Set nickname to subject according to experiment design (anonymous)
* Send test message
  * Setup individualized test message 
  * Require participant to repond by sending the same message back
  * Check for returned message
* Set up end-to-end encryption
  * Test with friends
  * Test with participants
  
### Testing survey platform
- [X] Qualtrics too slow
- [X] wjx.cn censorship

### Setup website
* Bare minimum website on local host

Clarifications
----

TODOs
----
* use csv input
  - [X] use baidu input (or other sensitive keywords search)
  - [X] are links good? keywords bad?
* test with friends 

* try to integrate encryption with wxpy API
    * choose encryption
    * understand API
* set up database
* hosting web service, maintaining DB

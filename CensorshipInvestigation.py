#!/usr/bin/env python
# coding: utf-8

# # Censorship Investigation
# Proposed solutions and test for blocked WeChat message and surveys.
# 
# 
# ## Resources
# * [GreatFire Analyzer](https://en.greatfire.org/analyzer): censorship analyzer for url, keywords etc.
# 
# ## WeChat
# 
# ### Setup and Manage Multi Accounts
# * Register with [Google Voice US numbers](http://www.debugrun.com/a/Qok8j6g.html)
#   * 0 cost, but needs to make phone calls and texts every week to prevent from being canceled
#   * might not pass WeChat check
# * Multiple login with Python ThreadPool 
#   * (See code below)
# 
# ### Censorship at server
# * Choose a usable encryption
# * Encoperate with the wxpy API
# 
# ## Surveys
# 
# Option 1: use Quatrics
# 
# * speed test on [WebSitePulse](https://www.websitepulse.com/tools/china-firewall-test#) using self-created Qualtrics [form](https://neu.co1.qualtrics.com/jfe/form/SV_eqyhSbMmkQUC67r) 
# 
# | Tested From | Shanghai, China | Beijing, China | 
# |--- |---|--- |
# | Status | OK | OK |               
# | Response Time | 6.038 sec | 0.803 sec |         
# 
# 
# * when using a longer [form](https://neu.co1.qualtrics.com/jfe/form/SV_5nL3uej960DjNxr)
# 
# | Tested From | Shanghai, China | Beijing, China |
# | ---| --- | --- |
# | Status | OK | OK |             
# | Response Time | 5.583 sec | 6.446 sec |
# 
# Option 1: use Chinese survey website [wjc](https://www.wjx.cn/)
# 
# Option 3: use vultr or [bluehost](https://www.bluehost.com/?utm_source=%28direct%29&utm_medium=affiliate&utm_campaign=affiliate-link_wordpressbluehost_notype) for web hosting

# In[ ]:


# Python ThreadPool to login multiple accounts at once
from multiprocessing.pool import ThreadPool
from wxpy import *

cache_paths = ['bot1.pkl', 'bot2.pkl']

with ThreadPool(2) as pool:
    bot1, bot2 = pool.map(lambda x: Bot(x, qr_path='{}.png'.format(x)), cache_paths)


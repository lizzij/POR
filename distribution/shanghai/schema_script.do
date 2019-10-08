// produces schema script that I can copy and paste into schema.sql

cd "C:\Users\dongh\Dropbox\Research-active\ChinaMedia\Git_POR\distribution\shanghai"

import delimited pastUsersWechatID_c4, clear encoding("utf-8")
drop if inlist(wechat_id,"b83120371","survey-study","Baijie021187","wxid_2q7bzdd61x9a22")
duplicates drop
duplicates report user_id

// sort cohort wechat_id
gen script = "  ("+string(user_id,"%10.0g")+", 99, '" + wechat_id + "', '"+treatment+"', 'h', 'h', "+string(cohort)+")"
replace script = script + "," if _n != _N
replace script = script + ";" if _n == _N

// copy and paste from data editor..

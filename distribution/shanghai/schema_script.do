// produces schema script that I can copy and paste into schema.sql

cd "C:\Users\dongh\Dropbox\Research-active\ChinaMedia\Git_POR\distribution\shanghai"

import delimited pastUsersWechatID, clear
sort cohort wechat_id
gen script = "  ("+string(_n)+", 99, '" + wechat_id + "', 't', 'h', 'h', "+string(cohort)+")"
replace script = script + "," if _n != _N
replace script = script + ";" if _n == _N

keep script

// copy and paste from data editor..

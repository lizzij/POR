// produces schema script that I can copy and paste into schema.sql

// Prep users
cd "C:\Users\dongh\Dropbox\Research-active\ChinaMedia\Shanghai160Backup"
import delimited 20191006_0911_allUsers, clear encoding("utf-8")
drop if inlist(wechat_id,"b83120371","survey-study","Baijie021187","wxid_2q7bzdd61x9a22")
gen tempday = -day
bys user_id (tempday): gen tempn = _n
keep if tempn == 1
gen script = "  ("+string(user_id,"%10.0g")+", "+string(day)+", '" + wechat_id + "', '"+treatment+"', '"+user_id_hashid+"', '"+day_hashid+"', "+string(cohort)+"),"
keep user_id
tempfile user_list
save `user_list'

// Prep activities (cohort 4)
import delimited 20191006_0911_allActivities, clear encoding("utf-8")
merge 1:1 user_id using `user_list', nogen keep(3) // drops test IDs
keep if day==7
gen script = "  ("+string(user_id,"%10.0g")+", "+string(day)+", " + string(day_complete) + ", "+string(survey_page)+", '"+day_started+"', '"+curr_time+"'),"

// Prep results (need cohort 4's pledged steps)
import delimited 20191006_0911_allResults, clear encoding("utf-8")
keep if question_id == "walkathonSteps" & day==7
merge 1:1 user_id using `user_list', nogen keep(3) // drops test IDs
duplicates report user_id
gen script = "  ("+string(user_id,"%10.0g")+", "+string(day)+", '" + result + "', '"+created+"', '"+question_id+"'),"

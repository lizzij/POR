# Chatbot

## Todos
- [ ] Run at a certain time? (shell script)
- [ ] Do we have to scan the QR code?

## How to get results?
```bash
chmod +x getResults.sh
./getResults.sh
```

or simply run:
- to get all activities
```bash
wget -qO- https://dailyeventinfo.com/allActivities | sed -e 's/<[^>]*>//g;s/^ //g;s/^[ \t]*//;s/完成情况//;/^$/d' > allActivites.csv
```

- to get all users
```bash
wget -qO- https://dailyeventinfo.com/allUsers | sed -e 's/<[^>]*>//g;s/^ //g;s/^[ \t]*//;s/完成情况//;/^$/d' > allUsers.csv
```

## How to test chatbot?
- Modify time in `runChatbot.py`
```python
# SCHEDULE

# computer time EST   06:00 AM   10:00 AM
# user time GMT+8     18:00 PM   22:00 PM
# host time GMT       10:00 PM   14:00 PM

schedule.every().day.at("06:00").do(sixPM) # change "06:00" to a nearby computer time
schedule.every().day.at("10:00").do(tenPM) # change "10:00" to a nearby computer time
```
- Modify test, and todo
```
python3 runChatbot.py
```

- Answer if test question
- Scan QR code

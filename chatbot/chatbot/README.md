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

## How to run chatbot?
- Modify test, and todo
```
python3 chatbot.py
```

- Scan QR code with account

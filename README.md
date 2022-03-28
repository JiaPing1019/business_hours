# Business hours 

This project is to let a user set the opening hours for their organization. e.g. the opening hours for
a Nursery or School (simplified version).

## Quickstart

- Clone the repository
```
git clone git@github.com:JiaPing1019/business_hours.git
```

- Go to project directory

In terminal
```
cd business_hours
```

- Install the dependencies
```
npm install
```

- Run the app in the development mode
```
npm start
```

## How it works

- [x] Start and End time selector will show up when checkbox is checked

- [x] Open time and close time will be the current time by default

- [x] User can choose their desired Open/close time, and these times will be set by default for the next time use

- [x] User can click `SAVE CHANGES` button to save their opening/business hour, and they will be display on the Opening Hour List

- [x] There are some validatin retrictions when saving the opening/business hour
 - [x] Open time must present
 - [x] Close time must present
 - [x] Close time must greater than open time

- [ ] IF the save failed, we should show error messages on the UI

## Demo

https://user-images.githubusercontent.com/12680148/160289108-6383a3c7-f7bd-4191-84c9-37b9bf1115b0.mov

## UI display

### PC
<img width="500" alt="Screen Shot 2022-03-22 at 23 25 49" src="https://user-images.githubusercontent.com/12680148/159592570-8a673190-b158-45e2-b85f-c8da07d7f49a.png">

### Smart phone
<img width="250" alt="Screen Shot 2022-03-22 at 23 26 16" src="https://user-images.githubusercontent.com/12680148/159592605-ef6d2097-4ef8-47e4-bd52-39ee1e7794b4.png">

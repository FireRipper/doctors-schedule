![Repository Top Language](https://img.shields.io/github/languages/top/FireRipper/doctors-schedule)
![GitHub forks](https://img.shields.io/github/forks/FireRipper/doctors-schedule)
![Github Repository Size](https://img.shields.io/github/repo-size/FireRipper/doctors-schedule)
![Github Open Issues](https://img.shields.io/github/issues/FireRipper/doctors-schedule)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/FireRipper/doctors-schedule)
![GitHub contributors](https://img.shields.io/github/contributors/FireRipper/doctors-schedule)

# Doctors schedule

## Task description
- Create a component that will accept the following data for example: 
  - [data](https://www.dropbox.com/s/18qqozhh34rbzxl/doctorsSchedule.json?dl=0) - this JSON describes the doctor's work time, where the "start" field is the beginning of the working day,
  and the "end" field is the end. 
    
- The file also contains a list of already existing appointments, where for each entry the "start" field is the
  appointed appointment time, and the "duration" field is the duration of this appointment in minutes.

## Goal
You need to split the doctor's working hours into 45-minute cells, excluding those that fall within the range of existing appointments.

### For example, for the file above, the output will be like this:
`[10:00, 11:30, 12:15, 13:00, 14:10]`

## How to install
- Clone the repository 
- Just open **index.html** in your browser

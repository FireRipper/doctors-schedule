// const _apiUrl = 'https://www.dropbox.com/s/18qqozhh34rbzxl/doctorsSchedule.json?dl=0'
//
// async function getScheduleFromApi(url) {
//   try {
//     const response = await fetch(url, { mode: 'no-cors' })
//
//     console.log(response)
//     const data = await response.json()
//
//     if (!response.ok) {
//       throw new Error(data.message || 'Что-то пошло не так')
//     }
//
//     return data
//   } catch (err) {
//     console.log(err.message)
//     throw err
//   }
// }

(function () {
  const doctorsSchedule = {
    "start": "10:00",
    "appointments": [
      {
        "start": "10:45",
        "duration": 45
      },
      {
        "start": "13:50",
        "duration": 20
      }
    ],
    "end": "15:00"
  }

  function fakeApi (data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      },2000)
    })
  }

  function handleTime({ start, appointments, end }, workingDuration = 45) {
    const result = []
    const times = []

    for (let i = 0; i < appointments.length; i++) {
      const start = timeToMinutes(appointments[i].start)

      times.push({ start, end: start + appointments[i].duration })
    }

    times.sort((a, b) => a.start - b.start)

    let startMinutes = timeToMinutes(start)
    const endMinutes = timeToMinutes(end)

    let index = 0
    while (startMinutes < endMinutes - workingDuration) {
      if (index < times.length && startMinutes + workingDuration > times[index].start) {
        startMinutes = times[index].end
        index++
      } else {
        result.push(minutesToTime(startMinutes))
        startMinutes += workingDuration
      }
    }

    return result
  }

  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map((i) => +i)

    return hours * 60 + minutes
  }

  function minutesToTime(minutes) {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60

    return (h < 10 ? `0${h}` : h) + ':' + (m < 10 ? `0${m}` : m)
  }

  fakeApi(doctorsSchedule)
    .then(res => {
      if (res && typeof res === "object" && res.length !== 0) {
        const div = document.createElement('div')

        div.textContent = `[${handleTime(res).join(' ')}]`
        document.body.append(div)
      }
    })
})()


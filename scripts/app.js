const TICKET_NUMBERS = [1, 2, 3]
const TICKET_TITLES = ['title 1', 'title 2', 'title 3']
const STORY_POINTS = [1, 3, 5]
const MAIN_DATA = []
const ASSEMBLED_TICKETS = []
const RC_NUMBER = '12345'

function releaseCandidateMessageGeneration(number) {

    for (let i = 0; i < TICKET_NUMBERS.length; i++) {
        MAIN_DATA[i] = {}
        MAIN_DATA[i].ticketNumber = TICKET_NUMBERS[i]
        MAIN_DATA[i].ticketTitle = TICKET_TITLES[i]
        MAIN_DATA[i].storyPoints = STORY_POINTS[i]
    }

    MAIN_DATA.map(i => {
        return ASSEMBLED_TICKETS.push(`\n* [SA-${i.ticketNumber}] ${i.ticketTitle} | SP => ${i.storyPoints}`);
    })

    const RELEASE_CANDIDATE_NUMBER = (number) => {
        return `RC ${number} suggestion:`
    }

    const TOTAL_STORY_POINTS = () => {
        let result = 0
        MAIN_DATA.map(i => {
            result += i.storyPoints
        })
        return `\nTotal SP => ${result}`
    }

    const COPY = () => {
        let copyText = document.querySelector('#input')
        copyText.select()
        document.execCommand('copy')
    }

    document.querySelector('#copy').addEventListener('click', COPY)

    const WRITE = () => {
        let writeText = document.querySelector('#input')
        writeText.focus()
        writeText.innerHTML = `${RELEASE_CANDIDATE_NUMBER(number)} \n ${ASSEMBLED_TICKETS} \n ${TOTAL_STORY_POINTS()}`
    }
    document.querySelector('#input').addEventListener('click', WRITE)
}

releaseCandidateMessageGeneration(RC_NUMBER)

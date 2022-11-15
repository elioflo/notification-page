function unreadNotifications(){
    return Array.from(document.getElementsByClassName('notification--unread'))
}

function updateNotificationCount(){
    const notifications = document.getElementsByClassName('notifications__unread')[0]
    notifications.textContent = unreadNotifications().length
}

function read(notification){
    if(notification.classList.contains('notification--unread')){
        notification.classList.remove('notification--unread')
        notification.getElementsByClassName('dot')[0].remove()
        updateNotificationCount()
    }
}

function readAll(){
    unreadNotifications().forEach(notification => read(notification))
    updateNotificationCount()
}



unreadNotifications().forEach(notification => {
    notification.addEventListener('click',()=>{
        read(notification)
    })
})

updateNotificationCount()

document.getElementsByClassName('notifications__readall')[0].addEventListener('click',readAll)
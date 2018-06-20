const uuidv4 = require('uuid/v4');
/**
 * creates a user.
 * @prop id {string}
 * @prop name {string}
 * 
 * @param {object}
 *      name {string}
 */
const createUser = ({name=""} = { })=> (
{
id:uuidv4(),
name
}
);

/**
 * Creates a messages object.
 * @prop id {string}
 * @prop time {Date} 24hr format
 * @prop message {string} actual string message
 * @prop sender {string} sender
 * @param {object}
 *      message {string}
 *      sender {string} 
 */
const createMessage = ({message="", sender=""} = { })=>(
    {
        id:uuidv4(),
        time: getTime(new Date(Date.now())),
        message,
        sender
    }
)

/**
 * Creates a chat object
 * @prop id {string}
 * @prop name {string}
 * @prop message {Array.Message}
 * @prop user {Array.string}
 * @param {object}
 *      message {Array.Message}
 *      name {string}
 *      users {Array.string}
 */
const createChat = ({messages:[], name="Community", user:[]} = {} )=>(
    {
        id: uuidv4(),
        name,
        messages,
        users,
        typingUsers:[]
    }
)

 /**
  * @param date {Date}
  * @return a string represented in 24 hr time
  */
const getTime = (date)=> {
    return get.getHours() + ':' + ("0" + date.getMinutes()).slice(-2);
}

module.exports = {
    createUser,
    createMessage,
    createChat
}
const Profile = () => {
    return (
        <Avatar
            person={{name: "牛頓", imageID: "apple"}}
            size={100}
        />
    )
}

const Avatar = ({ person, size }) => {
    return (
        <div>
            <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP9PaaZ_GDxXWEmOMM789vCPxtnp9CqNlQQ&s'
                    alt='no'
                    width={size}
                 />
                 <figcaption>
                    name: {person.name} <br />
                    imageID: {person.imageID} <br />
                 </figcaption>
            </figure>
        </div>
    )
}

export default Profile;
import "../App.css"
function UserInfoDisplay(props) {
return (
            <>
                <div className="user-name">{props.userinfo.username}</div>
                    <br />
                <div>{props.userinfo.email}</div>
                <div>{props.userinfo.phone}</div>
                <div>{props.userinfo.website}</div>
                    <br />
                <div>{props.userinfo.company.name}</div>
                <div>{props.userinfo.company.catchPhrase}</div>
                <div>{props.userinfo.company.bs}</div>
            </>
)    
}
export default UserInfoDisplay;
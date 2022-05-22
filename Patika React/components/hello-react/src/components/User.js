import PropTypes from 'prop-types'

function User ({ name, surName, isLoggedIn, age, friends, address }) {

    // isLoggedIn gelmezse yada false gelirse  alttaki alanı render etmekte 
  if (!isLoggedIn) {
    return <div>Giriş Yapmadınız </div>
  }

  return (
    <>
      <h1>{`${name} ${surName} (${age})`}</h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends &&
        friends.map(friend => (
          <div key={friend.id}>
            {friend.id}--{friend.name}
          </div>
        ))}
    </>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friend: PropTypes.array,
  address: PropTypes.shape({ title: PropTypes.string, zip: PropTypes.number })
}

User.defaultProps = {
  isLoggedIn: false,
  name : "İsimsiz"
}

export default User

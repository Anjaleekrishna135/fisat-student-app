import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">FISAT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" to="/">Home</a>
                <a className="nav-link" href="/search">Search</a>
                <a className="nav-link" href="/view">View All</a>

            </div>
        </div>
    </div>
</nav>
</div>
  )
}

export default NavBar
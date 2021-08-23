const SideBar = () => {
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 mr-5 text-white bg-dark" style={{width: "300px"}}>
            <span class="fs-4">Sidebar</span>
                
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                    
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    
                    Orders
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    
                    Customers
                    </a>
                </li>
                </ul>
                <hr />
                <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar
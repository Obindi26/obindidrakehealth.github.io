.wrapper {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.title-text .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
}

.form-container .slide-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    position: relative;
}

.form-container .slide-controls label {
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
}

.form-container .slider-tab {
    position: absolute;
    width: 50%;
    height: 100%;
    background: #007bff;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    z-index: -1;
}

.form-inner {
    display: flex;
    transition: 0.3s ease-in-out;
}

.form-inner form {
    width: 100%;
    transition: 0.3s ease-in-out;
}

.form-inner .login {
    margin-left: 0;
}

.form-inner .signup {
    margin-left: -100%;
}

.field {
    margin-bottom: 15px;
}

.field input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}

.pass-link, .signup-link {
    text-align: center;
    margin: 10px 0;
}

.field.btn {
    position: relative;
}

.field.btn .btn-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #007bff;
    border-radius: 5px;
    z-index: -1;
    transition: 0.3s ease-in-out;
}

.field.btn input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background: none;
    cursor: pointer;
}

.slide-controls input:checked + label + .slider-tab {
    transform: translateX(100%);
}


<div class="container forms">
    <div class="form login">
        <div class="form content">
            <header>Login</header>
                <form action="#">
                    <div class="field input-field">
                        <input type="email" name="Email" class="input">
                    </div>
                    <div class="field input-field">
                        <input type="password" name="Password" class="Password">
                    </div>  
                        <div class="form-link">
                            <a class="forgot-pass">Forgot password</a>
                        </div>
                    <div class="field button-field">
                        <button>login</button>
                    </div>   
                        <div class="form-link">
                            <span>Already have an Account? <a class="signup-link">Signup</a></span>
                        </div>               
                </form>
        </div>
        
    </div>
</div>




 .partnership-1-content{
    display: flex;
    align-items: center;
    justify-content: center;
}
.line_content {
    width: 5px;
    height: 100px;
    background-color: green;
}
.text-container_content {
    margin-left: 20px;
}
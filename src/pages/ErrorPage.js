import logo from "../assets/logo.svg";

function ErrorPage() {
    return <div className="mx-auto flex flex-col">
        <h1 className="text-9xl flex mx-auto font-semibold text-gray-700">4
        <img src={logo} alt="" className="mt-10 h-20 mr-1 animate-bounce" />{" "}
        4</h1>
        <h2 className="text-2xl text-gray-600 font-semibold text-center mt-4">Oops... Wrong Page :(</h2>
    </div>
}

export default ErrorPage;
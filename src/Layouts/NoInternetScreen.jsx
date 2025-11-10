import offlineImg from "../assets/images/no-internet.svg";

export default function NoInternetScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img src={offlineImg} alt="no internet" className="w-64 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">OOPS!</h1>
      <h2 className="text-xl font-semibold text-black mb-2">
        النت مو قدّها اليوم 😅
      </h2>
      <p className="text-gray-600 text-center">
        تأكد من الاتصال وخذنا نكمل اللعب 🔥
      </p>
    </div>
  );
}

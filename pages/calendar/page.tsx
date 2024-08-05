import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "../../components/modal";

const Calendar = () => {
  const [view, setView] = useState<"monthly" | "weekly">("monthly");
  const [language, setLanguage] = useState<"tr" | "en">("tr"); // Dil durumu
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Dil dropdown durumu
  const [currentStartDate, setCurrentStartDate] = useState(() => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Pazartesi
    return new Date(today.setDate(firstDayOfWeek));
  });
  const router = useRouter();

  const days =
    language === "tr"
      ? ["Pzt", "Sal", "Çar", "Per", "Cum", "Cts", "Paz"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const handlePrevMonth = () => {
    setCurrentStartDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentStartDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  const handlePrevWeek = () => {
    setCurrentStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  const generateMonthlyDates = (date: Date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates: Array<number> = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    );
    const padding = Array.from({ length: (firstDay + 6) % 7 }, () => 0);
    return padding.concat(dates);
  };

  const generateWeeklyDates = (startDate: Date) => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
    return dates;
  };

  const currentMonthDates = generateMonthlyDates(currentStartDate);
  const weeklyDates = generateWeeklyDates(currentStartDate);

  const monthNames =
    language === "tr"
      ? [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  const monthName = monthNames[currentStartDate.getMonth()];

  const startDate = new Date(currentStartDate);
  const endDate = new Date(currentStartDate);
  endDate.setDate(endDate.getDate() + 6); // End of week

  const weekRange = `${startDate.toLocaleDateString(
    language === "tr" ? "tr-TR" : "en-US"
  )} - ${endDate.toLocaleDateString(language === "tr" ? "tr-TR" : "en-US")}`;

  const handleAddPost = (date: Date) => {
    router.push(`/createPost/page?date=${date.toISOString().split("T")[0]}`);
  };

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang); // Dil durumunu güncelle
    setIsLanguageDropdownOpen(false); // Dropdown'u kapat
  };

  const handleLogout = () => {
    // Oturum bilgisini temizleme (örneğin localStorage'dan)
    localStorage.removeItem("userToken"); // Örnek oturum verisi

    // Ana sayfaya yönlendirme
    router.push("/login/page");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md relative h-fit">
        <div className="p-4">
          <Image
            src="/pp.png"
            alt="Avatar"
            className="w-24 h-24 ml-12"
            width={54}
            height={54}
            loading="eager"
          />
          <h2 className="mt-2 text-lg font-semibold">erenezgi40@gmail.com</h2>
          <p className="text-sm text-gray-600">
            {language === "tr" ? "Hesap Sahibi" : "Account Owner"}
          </p>
        </div>
        <nav className="mt-8">
          <Link href="/" className="block p-4 text-gray-800 hover:bg-gray-200">
            {language === "tr" ? "Ana Sayfa" : "Home"}
          </Link>
          <Link
            href="/addAccount/page"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Hesap Ekle" : "Add Account"}
          </Link>
          <Link
            href="/create"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Oluştur" : "Create"}
          </Link>
          <Link
            href="/calendar"
            className="block p-4 text-gray-800 hover:bg-gray-200 "
          >
            {language === "tr" ? "Takvim" : "Calendar"}
          </Link>
          <Link
            href="/membership"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Üyelik" : "Membership"}
          </Link>
          <Link
            href="/settings"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Ayarlar" : "Settings"}
          </Link>
          <div className="block p-4 text-gray-800 hover:bg-gray-200 relative">
            <button
              id="dropdownMenuIconButton"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="inline-flex items-center text-center "
              type="button"
            >
              <span>{language === "tr" ? "Dil" : "Language"}</span>
              <svg
                className="w-5 h-5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
              >
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div
                id="dropdownDots"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 right-0 mt-2"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLanguageChange("tr")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Türkçe
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLanguageChange("en")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            href="/systemStatus"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Sistem Durumu" : "System Status"}
          </Link>
          <Link
            href="/privacy"
            className="block p-4 text-gray-800 hover:bg-gray-200"
          >
            {language === "tr" ? "Gizlilik" : "Privacy"}
          </Link>
          <button
            onClick={handleLogout}
            className="block p-4 text-gray-800 hover:bg-gray-200 w-full text-left"
          >
            {language === "tr" ? "Çıkış yap" : "Logout"}
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {view === "monthly" ? (
              <>
                <button
                  className="px-2 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-md hover:bg-blue-600"
                  onClick={handlePrevMonth}
                >
                  &lt;
                </button>
                <h1 className="mx-4 text-2xl font-semibold">
                  {monthName} {currentStartDate.getFullYear()}
                </h1>
                <button
                  className="px-2 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-md hover:bg-blue-600"
                  onClick={handleNextMonth}
                >
                  &gt;
                </button>
              </>
            ) : (
              <>
                <button
                  className="px-2 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-md hover:bg-blue-600"
                  onClick={handlePrevWeek}
                >
                  &lt;
                </button>
                <h1 className="mx-4 text-2xl font-semibold">{weekRange}</h1>
                <button
                  className="px-2 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-md hover:bg-blue-600"
                  onClick={handleNextWeek}
                >
                  &gt;
                </button>
              </>
            )}
          </div>
          <div>
            <button
              className={`px-4 py-2 rounded-md ${
                view === "weekly"
                  ? "bg-[#0000FF] text-[#FFFFFF]"
                  : "bg-[#0000FF] text-[#FFFFFF]"
              } hover:bg-blue-700`}
              onClick={() => setView("weekly")}
            >
              {language === "tr" ? "Haftalık" : "Weekly"}
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-md ${
                view === "monthly"
                  ? "bg-[#0000FF] text-[#FFFFFF]"
                  : "bg-[#0000FF] text-[#FFFFFF]"
              } hover:bg-blue-700`}
              onClick={() => setView("monthly")}
            >
              {language === "tr" ? "Aylık" : "Monthly"}
            </button>
          </div>
        </div>
        {view === "monthly" ? (
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
            {currentMonthDates.map((date, index) => (
              <div
                key={index}
                className={`relative text-center border border-gray-300 h-32 ${
                  date === null ? "bg-gray-200" : ""
                }`}
              >
                {date !== null && (
                  <>
                    <span className="text-xs text-gray-900 absolute top-1 left-1">
                      {date}
                    </span>
                    {new Date(
                      currentStartDate.getFullYear(),
                      currentStartDate.getMonth(),
                      date
                    ) >= new Date() && (
                      <>
                        <button
                          className="absolute bottom-1 right-1 px-1 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-full text-sm"
                          onClick={() =>
                            handleAddPost(
                              new Date(
                                currentStartDate.getFullYear(),
                                currentStartDate.getMonth(),
                                date
                              )
                            )
                          }
                        >
                          +
                        </button>
                        <Modal language={language} />{" "}
                        {/* Modal'a dil geçildi */}
                      </>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-8 gap-1">
            <div></div>
            {days.map((day, index) => (
              <div key={index} className="text-center font-semibold">
                {day}
              </div>
            ))}
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="text-right pr-2">{hour}</div>
                {weeklyDates.map((date, index) => (
                  <div
                    key={index}
                    className={`border border-gray-300 h-32 relative ${
                      date >= new Date() ? "bg-gray-100" : ""
                    }`}
                  >
                    {date >= new Date() && (
                      <>
                        <Modal language={language} />{" "}
                        {/* Modal'a dil geçildi */}
                      </>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Calendar;

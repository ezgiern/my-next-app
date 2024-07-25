// pages/calendar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Modal} from './modal';

const Calendar = () => {
  const [view, setView] = useState<'monthly' | 'weekly'>('monthly');
  const [currentStartDate, setCurrentStartDate] = useState(() => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Pazartesi
    return new Date(today.setDate(firstDayOfWeek));
  });
  const router = useRouter();

  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts', 'Paz'];
  const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  const handlePrevMonth = () => {
    setCurrentStartDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentStartDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  const handlePrevWeek = () => {
    setCurrentStartDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentStartDate(prev => {
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
    const dates:Array<number> = Array.from({ length: daysInMonth }, (_, i) => i + 1);
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

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  const monthName = monthNames[currentStartDate.getMonth()];

  const startDate = new Date(currentStartDate);
  const endDate = new Date(currentStartDate);
  endDate.setDate(endDate.getDate() + 6); // End of week

  const weekRange = `${startDate.toLocaleDateString('tr-TR')} - ${endDate.toLocaleDateString('tr-TR')}`;

  const handleAddPost = (date: Date) => {
    router.push(`/createPost?date=${date.toISOString().split('T')[0]}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md fixed h-full">
        <div className="p-4">
          <Image src="/pp.jpg" alt="Avatar" className="w-24 h-24 ml-12" width={64} height={64} />
          <h2 className="mt-2 text-lg font-semibold">erenezgi40@gmail.com</h2>
          <p className="text-sm text-gray-600">Hesap Sahibi</p>
        </div>
        <nav className="mt-8">
          <Link href="/" className="block p-4 text-gray-800 hover:bg-gray-200">Ana Sayfa</Link>
          <Link href="/addAccount" className="block p-4 text-gray-800 hover:bg-gray-200">Hesap Ekle</Link>
          <Link href="/create" className="block p-4 text-gray-800 hover:bg-gray-200">Oluştur</Link>
          <Link href="/calendar" className="block p-4 text-gray-800 hover:bg-gray-200 bg-gray-200">Takvim</Link>
          <Link href="/membership" className="block p-4 text-gray-800 hover:bg-gray-200">Üyelik</Link>
          <Link href="/settings" className="block p-4 text-gray-800 hover:bg-gray-200">Ayarlar</Link>
          <Link href="/language" className="block p-4 text-gray-800 hover:bg-gray-200">Dil</Link>
          <Link href="/systemStatus" className="block p-4 text-gray-800 hover:bg-gray-200">Sistem Durumu</Link>
          <Link href="/privacy" className="block p-4 text-gray-800 hover:bg-gray-200">Gizlilik</Link>
          <Link href="/logout" className="block p-4 text-gray-800 hover:bg-gray-200">Çıkış yap</Link>
        </nav>
      </aside>
      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {view === 'monthly' ? (
              <>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handlePrevMonth}
                >
                  &lt;
                </button>
                <h1 className="mx-4 text-2xl font-semibold">{monthName} {currentStartDate.getFullYear()}</h1>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleNextMonth}
                >
                  &gt;
                </button>
              </>
            ) : (
              <>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handlePrevWeek}
                >
                  &lt;
                </button>
                <h1 className="mx-4 text-2xl font-semibold">{weekRange}</h1>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleNextWeek}
                >
                  &gt;
                </button>
              </>
            )}
          </div>
          <div>
            <button
              className={`px-4 py-2 rounded-md ${view === 'weekly' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-700`}
              onClick={() => setView('weekly')}
            >
              Haftalık
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-md ${view === 'monthly' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-700`}
              onClick={() => setView('monthly')}
            >
              Aylık
            </button>
          </div>
        </div>
        {view === 'monthly' ? (
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div key={day} className="text-center font-semibold">{day}</div>
            ))}
            {currentMonthDates.map((date, index) => (
              <div key={index} className={`relative text-center border border-gray-300 h-32 ${date === null ? 'bg-gray-200' : ''}`}>
                {date !== null && (
                  <>
                    <span className="text-xs text-gray-500 absolute top-1 left-1">{date}</span>
                    {new Date(currentStartDate.getFullYear(), currentStartDate.getMonth(), date) >= new Date() && (
                      <button 
                        className="absolute bottom-1 right-1 px-1 py-1 bg-blue-500 text-white rounded-full text-sm" 
                        onClick={() => handleAddPost(new Date(currentStartDate.getFullYear(), currentStartDate.getMonth(), date))}
                      >
                        +
                      </button>
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
              <div key={index} className="text-center font-semibold">{day}</div>
            ))}
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="text-right pr-2">{hour}</div>
                {weeklyDates.map((date, index) => (
                  <div key={index} className={`border border-gray-300 h-32 relative ${date >= new Date() ? 'bg-gray-100' : ''}`}>
                    {date >= new Date() && (
                      <>
                      <Modal/></>
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



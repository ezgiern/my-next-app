import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setMessage('Şifreler uyuşmuyor.');
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Kayıt başarılı! Lütfen e-postanızı kontrol edin.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        <div className="w-1/2 p-8 bg-blue-100 flex flex-col justify-center items-center">
         <img src="image.png" alt="Description" className="w-3/4 h-auto object-contain" /> 
         <h1 className="text-3xl font-bold text-center mb-4">Posteffect.io</h1>
          <p className="text-center mb-6">Sosyal medya yönetimini kolaylaştırın!</p>
          
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Posteffect.io'ya hoşgeldin!</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Şifre Oluştur</label>
            <input
              type="password"
              placeholder="Şifre Oluştur"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Şifreni Doğrula</label>
            <input
              type="password"
              placeholder="Şifreni Doğrula"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Gerçek kişi olduğunuzu doğrulayın</span>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">
              Bu hesabı oluştururken gizlilik sözleşmesini onaylamış olursunuz:{" "}
              <a href="#" className="text-blue-500">Şartlar ve Gizlilik Sözleşmesi</a>
            </span>
          </div>
          <button
            onClick={handleSignUp}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Devam Et
          </button>
          <div className="mt-4 text-sm text-center">
            <a href="/login" className="text-blue-500">Hesabınız var mı? Şimdi Giriş Yap!</a>
          </div>
          <div className="mt-4 text-sm text-center">
            {message && (
              <p className={`mt-4 text-sm text-center ${message === 'Kayıt başarılı! Lütfen e-postanızı kontrol edin.' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import '../../App.css';

export default function Footer() {
  return (
    <footer className="fullFooter py-8">
      <div className="max-w-[700px] mx-auto flex flex-wrap items-center justify-center md:justify-between">
        {/* Logo */}
        <div className="w-full md:w-auto mb-6 md:mb-0 text-center">
          <a href='#'><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/581e2efc-8fab-47ca-9536-3770aab24ea4/d2joc5j-c2562d13-9dbe-4747-b70b-03e25d3abb80.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4MWUyZWZjLThmYWItNDdjYS05NTM2LTM3NzBhYWIyNGVhNFwvZDJqb2M1ai1jMjU2MmQxMy05ZGJlLTQ3NDctYjcwYi0wM2UyNWQzYWJiODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7RCqdHsS0eXFQ4PjKi-Nusb3gfY259k3RIeHZv4rlKs" width={60} className="mx-auto md:mx-0" /></a>
        </div>

        {/* Primo Menù */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pokédex</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
          </ul>
        </div>

        {/* Secondo Menù */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Account</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Username Dimenticato</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cambia Mail</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cambia Password</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


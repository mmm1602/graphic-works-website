export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 text-gray-600 text-sm">
      <p>&copy; {new Date().getFullYear()} YourAgencyName. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}

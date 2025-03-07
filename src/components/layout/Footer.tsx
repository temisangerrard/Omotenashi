import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Omotenashi</h3>
            <p className="text-slate-300 text-sm">
              Connecting verified hospitality businesses with pre-screened staff
              in Nigeria through Japanese-inspired hospitality excellence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/post-job" className="hover:text-white">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/browse-staff" className="hover:text-white">
                  Browse Staff
                </Link>
              </li>
              <li>
                <Link to="/employer-verification" className="hover:text-white">
                  Get Verified
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Staff</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/find-jobs" className="hover:text-white">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/staff-verification" className="hover:text-white">
                  Get Verified
                </Link>
              </li>
              <li>
                <Link to="/create-profile" className="hover:text-white">
                  Create Profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Email: contact@omotenashi.com</li>
              <li>Phone: +234 123 456 7890</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Omotenashi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

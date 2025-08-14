
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Large 404 Text */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-slate-200 dark:text-slate-700 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Error Message Card */}
        <Card className="border-0 shadow-none  bg-transparent backdrop-blur-sm">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Page Not Found</h2>
              <p className=" text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                {"Oops! The page you're looking for seems to have wandered off into the digital void."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>

              <Button variant="outline" size="lg" onClick={() => navigate(-1)} className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>

              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                <Link href="/search" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Helpful Links */}
        <div className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">Here are some helpful links instead:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              Contact
            </Link>
            <Link to="/downloads" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
            Downloads
            </Link>
            <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              Blog
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 opacity-30">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}

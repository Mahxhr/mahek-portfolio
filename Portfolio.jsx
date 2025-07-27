import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Mahek Zaheer</h1>
        <p className="text-lg text-gray-600">Java Developer, Spring Boot, MySQL</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Mahxhr" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:mahekzaheer003@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mahekzaheer" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-1">Online Bookstore Management System</h2>
            <p className="text-sm text-gray-600 mb-2">Spring Boot · MySQL · REST APIs</p>
            <p className="text-gray-700 mb-3">
              A RESTful web application to manage books, users, and orders with authentication and cart features.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a href="#" target="_blank">GitHub</a>
              </Button>
              <Button asChild>
                <a href="#" target="_blank">Live Demo</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-1">Spring Boot CRUD Application</h2>
            <p className="text-sm text-gray-600 mb-2">Spring Boot · MySQL · JPA · REST APIs</p>
            <p className="text-gray-700 mb-3">
              A backend system for product inventory with full CRUD functionality, built using RESTful APIs and tested with Postman.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a href="https://github.com/Mahxhr/springboot-crud" target="_blank">GitHub</a>
              </Button>
              <Button asChild>
                <a href="#" target="_blank">Live Demo</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Download Resume</h2>
        <Button asChild>
          <a href="/public/resume.pdf" download>
            Download PDF
          </a>
        </Button>
      </section>
    </main>
  );
}

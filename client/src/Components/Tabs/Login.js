import React, {useState} from 'react'
import Register from './Register'

const username
const name 
const password 
const address 

Register = (e) => {
  const config = {
    "method" : "POST",
    "headers" : { 
      "Content-Type" : "application/json"
    },
    "body" : JSON.stringify ({
      username,
      name,
      password,
      address
    })
  }
  fetch('/register', config)
}

function Login() {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Register</h2>
      
          <form class="max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label for="username" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Username</label>
                <input name="username" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
              </div>

              <div>
                <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
                <input name="name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
              </div>
      
              <div>
                <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
                <input name="password" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
              </div>

              <div>
                <label for="address" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Address</label>
                <input name="address" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
              </div>
      
              <button onClick >Register</button>
      
            </div>
      
            <div class="flex justify-center items-center bg-gray-100 p-4">
              <p class="text-gray-500 text-sm text-center">Already have an account? <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login

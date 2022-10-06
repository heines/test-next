import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Test page
      </h1>
      <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
        Input modal
      </button>
    </div>
  )
}

export default About

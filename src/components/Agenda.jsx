/* eslint-disable react/no-unescaped-entities */

function AgendaTable() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">ITL Conference Agenda</h1>
      <h2 className="text-lg font-semibold mb-6">
        Day One: Friday April 4, 2025 (Grand Ball Room, The Westin Calgary)
      </h2>
      <div className="overflow-x-auto w-full max-w-full">
        <table className="min-w-full border border-black bg-white text-sm">
          <thead className="hidden md:table-header-group">
            <tr>
              <th className="border border-black p-2 text-left font-semibold">Time</th>
              <th className="border border-black p-2 text-left font-semibold">Track One</th>
              <th className="border border-black p-2 text-left font-semibold">Track Two</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">8:00 AM - 9:00 AM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">
                Registration and Networking – Breakfast/Exhibition
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">9:00 AM - 9:15 AM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">
                Opening Remarks – Land Acknowledgement & Conference Opener
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">9:15 AM - 9:30 AM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">
                Special Address – TBD
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6 text-center" colSpan="3">Break</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">9:35 AM - 10:30 AM</td>
              <td className="p-2 md:w-2/5">
                <strong>Panel Session:</strong> Overcoming Cultural Barriers and Building Professional Relationships
                <br /><em>(Sponsored by the Canadian Centre for Professional Legal Education)</em>
                <p className="mt-2 text-justify">
                  Details: In today’s increasingly diverse legal landscape, cultural barriers can pose significant challenges to effective communication and collaboration. Join our expert panel as they explore strategies for overcoming these barriers, fostering inclusivity, and building strong professional relationships. Through real-life examples and interactive discussions, attendees will gain valuable insights into how to navigate cultural differences and leverage them for success in the legal profession. Don’t miss this opportunity to engage with thought leaders and enhance your professional network.
                </p>
              </td>
            </tr>
            {/* Additional Day One Sessions */}
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">10:30 AM - 11:00 AM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">
                Coffee Break – Networking & Exhibition <em>(Sponsored by The Westin Calgary)</em>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">11:00 AM - 11:30 AM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">
                Keynote Address - Crossing Borders, Breaking Barriers
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6 text-center" colSpan="3">Break</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">11:35 AM - 12:30 PM</td>
              <td className="p-2 md:w-2/5">
                <strong>Enhancing Integration and Professional Development for Internationally Trained Lawyers:</strong>
                <br />Perspectives from Regulators <em>(Session hosted by the Law Society of Alberta)</em>
                <p className="mt-2 text-justify">
                  Details: This informative session will bring together law societies, regulators and other stakeholders to discuss the integration of internationally trained lawyers into the Canadian legal system. Panelists will address the challenges faced by these professionals and share insights on existing programs and policies aimed at enhancing their professional development. Attendees will have the chance to learn about best practices, emerging trends, and collaborative efforts to create a more inclusive legal environment.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">12:30 PM - 1:30 PM</td>
              <td className="border border-black p-2 md:w-2/5 text-center" colSpan="2">Lunch & Networking</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">1:30 PM - 2:25 PM</td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Thriving in Private Practice & In-House:</strong> Insights for Internationally Trained Lawyers
                <p className="mt-2 text-justify">
                  Details: This session addresses the distinct challenges and opportunities that internationally trained lawyers encounter in both private practice and in-house roles. Participants will hear firsthand from accomplished practitioners who will share their personal journeys, offering valuable insights into building a robust client base, navigating firm dynamics, and achieving professional success in diverse legal environments.
                </p>
              </td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Navigating the NCA & Articling Process:</strong> Strategies and Support for NCA Students
                <br /><em>(Sponsored by The University of Alberta)</em>
                <p className="mt-2 text-justify">
                  Details: This session is designed for NCA students seeking guidance on navigating the accreditation and articling processes. Participants will gain a clear understanding of the NCA’s requirements and best practices for securing articling positions, including tips for crafting compelling applications and succeeding in interviews.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6 text-center" colSpan="3">Break</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">2:30 PM - 3:25 PM</td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Mastering Litigation:</strong> Strategies for Internationally Trained Litigators
                <p className="mt-2 text-justify">
                  Details: 	In this breakout session, we will delve into the nuances of litigation practice in Canada. Attendees will gain insights into trial preparation, courtroom strategies, and effective advocacy techniques tailored for diverse legal backgrounds. Learn from experienced litigators who will provide guidance and share best practices to help you excel in the competitive litigation arena.
                </p>
              </td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Thriving as a Law Firm Owner:</strong> Strategies for Success
                <p className="mt-2 text-justify">
                  Details: 	For internationally trained lawyers, launching and managing your own law firm presents unique challenges and opportunities. This session will focus on practical strategies to help you navigate the complexities of establishing a successful law practice in a new jurisdiction while effectively managing the business side of operations.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6 text-center" colSpan="3">Break</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">3:30 PM - 4:25 PM</td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Employment Law Fundamentals:</strong> Key Concepts and Current Trends
                <p className="mt-2 text-justify">
                  Details: This session will provide an essential overview of employment law, focusing on the key concepts and current trends that practitioners need to understand in today’s evolving workplace environment. Participants will gain insights into vital topics such as employee rights, workplace discrimination, and compliance with labor regulations.
                </p>
              </td>
              <td className="border border-black p-2 md:w-2/5">
                <strong>Recent Changes to Immigration Policies:</strong> Essential Updates for Legal Practitioners
                <p className="mt-2 text-justify">
                  Details: In light of ongoing developments in immigration law, this CPD session aims to provide legal practitioners with a comprehensive overview of recent changes to immigration policies and their implications for both lawyers and immigrant clients. Understanding these changes is vital for effective representation and advocacy.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6 text-center" colSpan="3">Break</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">4:30 PM - 5:20 PM</td>
              <td className="border border-black p-2 md:w-2/5" colSpan="2">
                <strong>Fireside Chat:</strong> Navigating Wealth Management for Internationally Trained Lawyers
                <p className="mt-2 text-justify">
                  Details: Join us for an engaging fireside chat focused on the unique financial challenges and opportunities that lawyers face in managing their wealth. Led by industry experts, this session will delve into critical topics such as tailored investment strategies, retirement planning in a new jurisdiction, and effective budgeting for legal professionals transitioning to the Canadian market.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">5:20 PM - 5:30 PM</td>
              <td className="border border-black p-2 md:w-2/5" colSpan="2">Closing Remarks</td>
            </tr>
            <tr className="flex flex-col md:flex-row md:table-row">
              <td className="border border-black p-2 md:w-1/6">5:30 PM - 6:00 PM</td>
              <td className="border border-black p-2 md:w-2/5" colSpan="2">Networking & Exhibition</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Day Two Schedule */}
      <h2 className="text-lg font-semibold mt-8 mb-6">Day Two: Saturday April 5, 2025 (Grand Ball Room, The Westin Calgary)</h2>
      <table className="w-full max-w-4xl border border-black bg-white text-sm">
        <thead>
          <tr>
            <th className="border border-black p-2 w-1/6 text-left font-semibold">Time</th>
            <th className="border border-black p-2 w-2/5 text-left font-semibold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">6:00 PM 7:00 PM</td>
            <td className="border border-black p-2" colSpan="2">Cocktail Reception – McMurray Room  </td>
          </tr>
          <tr>
            <td className="border border-black p-2">7:00 PM - 8:30 PM</td>
            <td className="border border-black p-2" colSpan="2">Gala & Dinner: Three Course Dinner, Entertainment & Special Address – Devonian Room  </td>
          </tr>
          <tr>
            <td className="border border-black p-2">8:30 PM - 9:30 PM</td>
            <td className="border border-black p-2" colSpan="2">Awards Presentation - Devonian Room </td>
          </tr>
          <tr>
            <td className="border border-black p-2">9:30 PM - 10:30 PM</td>
            <td className="border border-black p-2" colSpan="2">Evening Entertainment - Devonian Room </td>
          </tr>
          <tr>
            <td className="border border-black p-2">10:30 PM - Midnight</td>
            <td className="border border-black p-2" colSpan="2">Closing & After-Party </td>
          </tr>
        </tbody>
      </table>
      </div>
  );
}

export default AgendaTable;

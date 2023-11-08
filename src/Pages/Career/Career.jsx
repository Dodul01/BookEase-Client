

const Career = () => {
  const jobs = [
    {
      title: 'Front Desk Receptionist',
      description: 'We are looking for a friendly and customer-focused individual to join our team as a front desk receptionist. The ideal candidate should have excellent communication skills and a passion for providing exceptional service to our guests.',
    },
    {
      title: 'Housekeeping Supervisor',
      description: 'We are seeking a detail-oriented and organized housekeeping supervisor to ensure the cleanliness and comfort of our guests. The candidate should have previous experience in managing a housekeeping team and maintaining high standards of cleanliness.',
    },
    {
      title: 'Executive Chef',
      description: 'We are in search of a creative and experienced executive chef to lead our culinary team and deliver exceptional dining experiences to our guests. The ideal candidate should have a strong culinary background, innovative ideas, and a passion for creating delectable dishes.',
    },
  ];

  return (
    <div className='min-h-[100vh] mt-7 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-2'>Available Job</h1>
      <div>
        {jobs.map((job, i) => (
          <div key={i} className='mb-4'>
            <h2 className='text-xl font-semibold mb-1'>{job.title}</h2>
            <p className='text-lg text-gray-500 mb-1'>{job.description}</p>
            <button className='text-white bg-[#34977d] flex items-center justify-center h-10 w-[120px] font-semibold p-2 rounded-lg'>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;

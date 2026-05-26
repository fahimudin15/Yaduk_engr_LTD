export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  image: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'how-solar-energy-saves-money',
    title: 'How Solar Energy Saves Money',
    date: 'May 10, 2024',
    description: 'Discover how solar panels can significantly reduce your electricity bills and provide long-term savings.',
    image: '/images/blog-solar-savings.jpg',
    content: `
      <p>Solar energy is one of the most effective ways to reduce your monthly expenses while contributing to a greener planet. When you install solar panels on your home or business, you're essentially setting up your own power plant.</p>
      <h3>1. Lower Electricity Bills</h3>
      <p>The most immediate benefit of solar energy is the significant reduction in your electricity bills. By generating your own power during daylight hours, you draw less from the grid, saving you money from day one.</p>
      <h3>2. Net Metering</h3>
      <p>Many regions offer net metering programs, allowing you to sell excess energy back to the grid. This means your solar system can actually earn you credits or payments during periods of high production.</p>
    `
  },
  {
    slug: 'choosing-the-right-solar-panel',
    title: 'Choosing the Right Solar Panel',
    date: 'May 5, 2024',
    description: 'Learn about different types of solar panels and how to choose the best option for your needs.',
    image: '/images/blog-solar-panel-choice.jpg',
    content: `
      <p>Choosing the right solar panel is crucial for the efficiency and longevity of your solar energy system. With various technologies available, understanding the differences can help you make the best choice for your specific situation.</p>
      <h3>Monocrystalline Panels</h3>
      <p>These are made from a single crystal structure and are known for their high efficiency and sleek black appearance.</p>
    `
  },
  {
    slug: 'solar-maintenance-tips-for-long-life',
    title: 'Solar Maintenance Tips for Long Life',
    date: 'Apr 20, 2024',
    description: 'Essential maintenance tips to keep your solar system running at peak performance for years.',
    image: '/images/blog-solar-maintenance.jpg',
    content: `
      <p>Maintaining your solar panels is relatively simple but essential for ensuring your system continues to operate at peak efficiency for its entire 25-30 year lifespan.</p>
      <h3>Keep Them Clean</h3>
      <p>Dust, dirt, bird droppings, and pollen can block sunlight and reduce efficiency.</p>
    `
  },
  {
    slug: 'smart-home-integration-with-solar',
    title: 'Smart Home Integration with Solar',
    date: 'Jun 1, 2024',
    description: 'How to connect your solar system with smart home devices for maximum efficiency.',
    image: '/images/blog-smart-integration.jpg',
    content: `
      <p>Integrating your solar energy system with smart home technology can take your energy savings to the next level.</p>
      <h3>Real-time Monitoring</h3>
      <p>Smart apps allow you to track your energy production and consumption in real-time, helping you identify opportunities to save.</p>
      <h3>Automated Appliances</h3>
      <p>Schedule high-energy appliances like dishwashers and pool pumps to run during peak solar production hours.</p>
    `
  },
  {
    slug: 'government-incentives-for-solar-2024',
    title: 'Government Incentives for Solar 2024',
    date: 'Jun 15, 2024',
    description: 'Updated guide on tax credits and rebates available for solar installations in 2024.',
    image: '/images/blog-incentives.jpg',
    content: `
      <p>2024 is a great year to go solar thanks to continued and improved government incentives.</p>
      <h3>Federal Tax Credit (ITC)</h3>
      <p>The federal government continues to offer a significant tax credit for residential solar installations, covering up to 30% of the cost.</p>
      <h3>State-Level Rebates</h3>
      <p>Many states also offer additional rebates and incentives that can be combined with federal credits.</p>
    `
  },
]

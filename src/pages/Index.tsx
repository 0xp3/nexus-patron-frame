import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";
import creatorHero from "@/assets/creator-hero.jpg";

const Index = () => {
  const contentItems = [
    {
      id: 1,
      title: "Digital Art Masterclass",
      creator: "Alex Rivers",
      image: creatorHero,
      supporters: 1234,
      description: "Learn advanced digital painting techniques and create stunning artwork with professional tips and tricks.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: 2,
      title: "Web3 Development Guide",
      creator: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
      supporters: 892,
      description: "Complete guide to building decentralized applications on blockchain with hands-on projects.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 3,
      title: "Music Production Secrets",
      creator: "Jordan Smith",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
      supporters: 2456,
      description: "Behind the scenes of hit music production. Learn mixing, mastering, and composition from a pro.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
    {
      id: 4,
      title: "Creative Writing Workshop",
      creator: "Maya Johnson",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
      supporters: 678,
      description: "Unlock your storytelling potential with weekly writing prompts and community feedback sessions.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    },
    {
      id: 5,
      title: "3D Animation Studio",
      creator: "Chris Park",
      image: "https://images.unsplash.com/photo-1633354994836-31e9771ec854?w=800&h=450&fit=crop",
      supporters: 1567,
      description: "Master 3D modeling and animation with Blender. From basics to advanced character rigging.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    },
    {
      id: 6,
      title: "Photography Masterpieces",
      creator: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop",
      supporters: 3421,
      description: "Explore the art of photography through exclusive tutorials, critiques, and location shoots.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-6 md:px-6 md:py-8">
        <section className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Discover Creators
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Support amazing creators and get exclusive content
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {contentItems.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;

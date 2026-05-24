"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Thipsamai"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="The Legendary Pad Thai Since 1966"
      description="Experience the authentic flavors of Thipsamai, the home of Thailand's most iconic stir-fried noodles."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg?_wi=1",
          imageAlt: "Authentic Pad Thai",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cook-folding-vegetables-frying-pan_23-2148253440.jpg?_wi=1",
          imageAlt: "Wok cooking",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-curry-paste-red-curry-paste-made-from-chili_1150-25716.jpg",
          imageAlt: "Ingredients",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-juicy-steak-flaming-with-fire-smoke-grill-hand-professional-chef-turning-steak-concept-culinary-restaurant-food-kitchen_651396-3912.jpg",
          imageAlt: "Kitchen fire",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pad-thai-fresh-shrimp-white-plate_1150-22350.jpg",
          imageAlt: "Dish presentation",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-coffee-shop-cafe-interior_74190-6312.jpg",
          imageAlt: "Dining room",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/padthai-shrimp-white-dish-with-lime-eggs-wooden-table_1150-21135.jpg",
          imageAlt: "Dish presentation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-male-dining-out-with-his-friends-restaurant_181624-39580.jpg",
          imageAlt: "Kitchen fire",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/papaya-salad-ingredients-include-papaya_1150-24803.jpg",
          imageAlt: "Ingredients",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-person-enjoying-street-food_23-2151525841.jpg",
          imageAlt: "Wok cooking",
        },
      ]}
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491778.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-food_23-2149250063.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-selfie_23-2149250087.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-food_23-2149250084.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join over 1 million happy diners"
      marqueeItems={[
        {
          type: "text",
          text: "Authentic Since 1966",
        },
        {
          type: "text",
          text: "Fresh Ingredients Daily",
        },
        {
          type: "text",
          text: "Traditional Wok Method",
        },
        {
          type: "text",
          text: "Bangkok Original",
        },
        {
          type: "text",
          text: "Award Winning Flavor",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Flavor"
      description="Born in the heart of Bangkok, Thipsamai is more than a restaurant—it's a tradition that defines the authentic taste of Thai street food culture."
      metrics={[
        {
          value: "50+",
          title: "Years of Tradition",
        },
        {
          value: "1M+",
          title: "Satisfied Guests",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/asian-people-having-dinner-party_23-2149552633.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Signature Pad Thai",
          price: "$12.00",
          variant: "Shrimp & Egg",
          imageSrc: "http://img.b2bpic.net/free-photo/white-green-fruit-tomato-som_1203-5558.jpg",
        },
        {
          id: "2",
          name: "Seafood Pad Thai",
          price: "$15.00",
          variant: "Premium Fresh Catch",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-vietnamese-pork-sausage-with-chilli-lemon-garlic-tomato_1150-25762.jpg",
        },
        {
          id: "3",
          name: "Vegetarian Delight",
          price: "$10.00",
          variant: "Fresh Seasonal Veggies",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-vegetable-salad-inside-tray-light-grey-table_140725-137133.jpg",
        },
        {
          id: "4",
          name: "Traditional Wok Noodles",
          price: "$11.00",
          variant: "Classic Style",
          imageSrc: "http://img.b2bpic.net/free-photo/pad-thai-with-shrimp-vegetables-black-slate-background_123827-29552.jpg",
        },
        {
          id: "5",
          name: "Superb Pad Thai",
          price: "$18.00",
          variant: "Extra Large Serving",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-stir-fried-noodles-with-beef-vegetables-plate-wood-table_141793-12022.jpg",
        },
        {
          id: "6",
          name: "Egg Wrapped Noodle",
          price: "$14.00",
          variant: "Traditional Wrap",
          imageSrc: "http://img.b2bpic.net/free-photo/papaya-salad-served-with-rice-noodles-vegetable-salad-decorated-with-thai-food-ingredients_1150-26516.jpg",
        },
      ]}
      title="Signature Dishes"
      description="Our timeless recipes are prepared using the freshest ingredients and techniques passed down through generations."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Fresh",
          title: "Farm-to-Wok",
          subtitle: "Local ingredients",
          description: "We source all our ingredients from local Thai farms daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/christimas-interior-red-vintage-room-studio-shot_482257-17860.jpg",
          imageAlt: "interior of traditional thai place",
        },
        {
          tag: "Authentic",
          title: "Ancestral Recipes",
          subtitle: "Secret methods",
          description: "Our sauce recipes are carefully guarded family secrets.",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg?_wi=2",
          imageAlt: "interior of traditional thai place",
        },
        {
          tag: "Quality",
          title: "Traditional Wok",
          subtitle: "Iron technique",
          description: "High-heat cooking creates the smoky flavor of authentic wok noodles.",
          imageSrc: "http://img.b2bpic.net/free-photo/cook-folding-vegetables-frying-pan_23-2148253440.jpg?_wi=2",
          imageAlt: "interior of traditional thai place",
        },
      ]}
      title="Why We Are Iconic"
      description="Discover the art behind our cooking process and our dedication to quality."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1966",
          title: "Established",
          description: "The year our culinary journey began.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-iron-teapot-with-glass-tea-potted-plant-table_141793-13004.jpg",
        },
        {
          id: "m2",
          value: "24/7",
          title: "Passion",
          description: "Dedicated to serving the perfect meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/street-market-night_23-2151604342.jpg",
        },
        {
          id: "m3",
          value: "100%",
          title: "Authenticity",
          description: "Preserving Thai cultural heritage.",
          imageSrc: "http://img.b2bpic.net/free-photo/chinese-noodles-with-fish-fillet-tomato-lettuce-inside-bowl_114579-2956.jpg",
        },
      ]}
      title="By The Numbers"
      description="Our journey reflected in our commitment to culinary excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Anna P.",
          role: "Food Blogger",
          testimonial: "The best Pad Thai I have ever had. Absolutely worth the queue!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-food-photos_23-2149250094.jpg",
        },
        {
          id: "2",
          name: "Ken S.",
          role: "Traveler",
          testimonial: "A must-visit spot in Bangkok. Truly authentic and consistent.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517424.jpg",
        },
        {
          id: "3",
          name: "Maria L.",
          role: "Food Critic",
          testimonial: "The balance of flavors is unmatched. A culinary benchmark.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg",
        },
        {
          id: "4",
          name: "John D.",
          role: "Local",
          testimonial: "I've been coming here for years. Quality never drops.",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-s-person-using-fork-while-eating-grilled-chicken-dinner_23-2148029654.jpg",
        },
        {
          id: "5",
          name: "Sarah W.",
          role: "Chef",
          testimonial: "Studying their wok technique was a masterclass in simplicity and taste.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg",
        },
      ]}
      title="What Guests Say"
      description="The world-renowned flavor keeps food lovers coming back."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready for a Culinary Experience?"
      description="Book your table and taste the history of authentic Thai stir-fried noodles."
      buttons={[
        {
          text: "Reserve Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Thipsamai"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Signature Dishes",
              href: "#menu",
            },
            {
              label: "Full Menu",
              href: "#",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Locations",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Thipsamai Padthai Pratoopee."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

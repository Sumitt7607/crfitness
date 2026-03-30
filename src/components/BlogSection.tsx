import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "10 Best Compound Exercises for Total Body Strength", category: "Training", date: "Mar 25, 2026" },
  { title: "How to Build a Meal Prep Routine That Sticks", category: "Nutrition", date: "Mar 20, 2026" },
  { title: "The Science Behind HIIT: Why It Burns More Fat", category: "Science", date: "Mar 15, 2026" },
];

const BlogSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Stay Updated</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            FITNESS <span className="text-gradient-primary">TIPS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 group cursor-pointer hover:border-primary/20 transition-colors"
            >
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">{post.category}</span>
              <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;

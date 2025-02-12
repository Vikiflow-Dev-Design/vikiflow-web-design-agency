import { pricingTiers } from "@/lib/pricing-data";
import { PricingCard } from "@/app/services/components/pricing-card";

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Beta Pricing - Limited Time Offer
          </h1>
          <p className="text-xl text-muted-foreground">
            Join our beta program and get exclusive discounts on our web design
            services. Lock in amazing rates before we reach full capacity.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-muted rounded-full h-4 overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: "10%" }} // This would be dynamic based on actual progress
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>0 Projects</span>
            <span>25 Projects</span>
            <span>50 Projects</span>
            <span>75 Projects</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How does the beta pricing work?
              </h3>
              <p className="text-muted-foreground">
                Our beta pricing is divided into three tiers with increasing
                prices as we reach project milestones. Early adopters get the
                best rates, locked in for their initial project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What happens after the beta period?
              </h3>
              <p className="text-muted-foreground">
                Once we complete 75 projects, we'll transition to our regular
                pricing structure. Beta clients will retain their original
                pricing for maintenance and support services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I upgrade my tier later?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade to a higher tier if slots are still
                available. However, we recommend securing the best rate early as
                prices will increase as we reach capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

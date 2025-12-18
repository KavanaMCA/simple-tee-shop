import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

const sizeChart = [
  { size: "S", chest: "91-96", waist: "71-76", length: "68", shoulder: "41" },
  { size: "M", chest: "97-102", waist: "77-82", length: "70", shoulder: "43" },
  { size: "L", chest: "103-108", waist: "83-88", length: "72", shoulder: "45" },
  { size: "XL", chest: "109-114", waist: "89-94", length: "74", shoulder: "47" },
  { size: "XXL", chest: "115-120", waist: "95-100", length: "76", shoulder: "49" },
];

interface SizeGuideProps {
  trigger?: React.ReactNode;
}

const SizeGuide = ({ trigger }: SizeGuideProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="link" className="text-muted-foreground p-0 h-auto">
            <Ruler className="h-4 w-4 mr-1" />
            Size Guide
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Size Guide (India)</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Size Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-2 text-left font-medium text-muted-foreground">Size</th>
                  <th className="py-3 px-2 text-center font-medium text-muted-foreground">Chest (cm)</th>
                  <th className="py-3 px-2 text-center font-medium text-muted-foreground">Waist (cm)</th>
                  <th className="py-3 px-2 text-center font-medium text-muted-foreground">Length (cm)</th>
                  <th className="py-3 px-2 text-center font-medium text-muted-foreground">Shoulder (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.size} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2 font-semibold text-foreground">{row.size}</td>
                    <td className="py-3 px-2 text-center text-foreground">{row.chest}</td>
                    <td className="py-3 px-2 text-center text-foreground">{row.waist}</td>
                    <td className="py-3 px-2 text-center text-foreground">{row.length}</td>
                    <td className="py-3 px-2 text-center text-foreground">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">How to Measure</h4>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium shrink-0">1</span>
                <p><strong className="text-foreground">Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium shrink-0">2</span>
                <p><strong className="text-foreground">Waist:</strong> Measure around your natural waistline, at the narrowest part.</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium shrink-0">3</span>
                <p><strong className="text-foreground">Length:</strong> Measure from the highest point of shoulder to the bottom hem.</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium shrink-0">4</span>
                <p><strong className="text-foreground">Shoulder:</strong> Measure from one shoulder edge to the other across the back.</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="p-4 rounded-lg bg-muted/50 text-sm">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> For a relaxed fit, choose one size up. For streetwear styles, we recommend going one or two sizes up for the authentic oversized look.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;

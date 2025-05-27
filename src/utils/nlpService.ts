
import { Product, QAResponse } from '@/types/product';

// Simulated NLP service that would normally use actual ML models
export const generateAnswer = async (question: string, product: Product): Promise<QAResponse> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowercaseQuestion = question.toLowerCase();
  const productInfo = [
    product.description,
    ...(product.features || []),
    ...(product.faqs?.map(faq => `${faq.question} ${faq.answer}`) || [])
  ].join(' ').toLowerCase();
  
  // Simple keyword matching for demonstration
  // In a real implementation, this would use semantic similarity with embeddings
  
  if (lowercaseQuestion.includes('waterproof') || lowercaseQuestion.includes('water resistant')) {
    if (productInfo.includes('waterproof') || productInfo.includes('water resistant')) {
      return {
        answer: "Yes, this product is waterproof/water-resistant. Check the specifications for exact rating details.",
        confidence: 0.9
      };
    } else {
      return {
        answer: "Based on the product information, there's no mention of waterproof features for this item.",
        confidence: 0.7
      };
    }
  }
  
  if (lowercaseQuestion.includes('material') || lowercaseQuestion.includes('made of')) {
    if (product.material) {
      return {
        answer: `This product is made of ${product.material}.`,
        confidence: 0.95
      };
    } else {
      return {
        answer: "The specific material information is not clearly specified in the product details.",
        confidence: 0.6
      };
    }
  }
  
  if (lowercaseQuestion.includes('battery') || lowercaseQuestion.includes('battery life')) {
    if (productInfo.includes('battery') || productInfo.includes('hours')) {
      const batteryMatch = productInfo.match(/(\d+)[\s-]*hour[s]?\s*battery/);
      if (batteryMatch) {
        return {
          answer: `The battery life is ${batteryMatch[1]} hours according to the specifications.`,
          confidence: 0.9
        };
      }
      return {
        answer: "This product has battery features - please check the detailed specifications for exact battery life.",
        confidence: 0.7
      };
    } else {
      return {
        answer: "This product doesn't appear to have battery-powered features.",
        confidence: 0.8
      };
    }
  }
  
  if (lowercaseQuestion.includes('size') || lowercaseQuestion.includes('sizing')) {
    if (product.sizes && product.sizes.length > 0) {
      return {
        answer: `Available sizes are: ${product.sizes.join(', ')}. Please refer to the size chart for best fit.`,
        confidence: 0.9
      };
    } else {
      return {
        answer: "Size information is not applicable for this product or not specified in the details.",
        confidence: 0.7
      };
    }
  }
  
  if (lowercaseQuestion.includes('features') || lowercaseQuestion.includes('key features')) {
    if (product.features && product.features.length > 0) {
      return {
        answer: `Key features include: ${product.features.slice(0, 3).join(', ')}${product.features.length > 3 ? ', and more.' : '.'}`,
        confidence: 0.9
      };
    }
  }
  
  if (lowercaseQuestion.includes('care') || lowercaseQuestion.includes('maintenance') || lowercaseQuestion.includes('wash')) {
    if (productInfo.includes('machine wash') || productInfo.includes('washable')) {
      return {
        answer: "This product is machine washable. Please follow the care instructions on the label.",
        confidence: 0.8
      };
    } else if (product.category === 'Electronics') {
      return {
        answer: "For electronic products, use a dry or slightly damp cloth for cleaning. Avoid water contact.",
        confidence: 0.8
      };
    } else {
      return {
        answer: "Please refer to the care label or product manual for specific maintenance instructions.",
        confidence: 0.6
      };
    }
  }
  
  if (lowercaseQuestion.includes('daily use') || lowercaseQuestion.includes('everyday')) {
    return {
      answer: "Based on the product design and features, this appears suitable for regular daily use.",
      confidence: 0.7
    };
  }
  
  // Default response for unmatched questions
  return {
    answer: "I couldn't find specific information about that in the product details. Please check the full product description or contact customer support for more detailed information.",
    confidence: 0.5
  };
};

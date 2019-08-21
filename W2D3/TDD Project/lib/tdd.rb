class Array 
  def my_uniq
    hash = Hash.new(0)
    self.each {|el| hash[el] = 'pupper'}
    hash.keys 
  end

  def two_sum
    sums = []
    (0...self.length).each do |i1|
      (0...self.length).each do |i2|
        sums << [i1, i2] if i2 > i1 && self[i1] + self[i2] == 0
      end
    end
    sums
  end

  def my_transpose 
    transposed = Array.new {Array.new(self.length)} 
    i = 0 
    flattened = self.flatten
    passes = i 
    while passes < self.length
      while i < flattened.length 
        transposed[passes] << flattened[i]
        i += self.length 
      end
      passes += 1
    end
    transposed
  end

end

def stock_picker(arr)
  profits = Hash.new { |h, k| h[k] = []}
  (0...arr.length).each do |i1|
    (i1...arr.length).each do |i2|
      profit = arr[i2] - arr[i1]
      profits[profit] = [i1, i2]
    end
  end 
  profits = profits.sort_by { |k, v| k }
  profits[-1][1]
end




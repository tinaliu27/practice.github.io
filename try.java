class Try{
    public static void main(String[] args) {
       Try trying =  new Try();
       int[] prices = {9,2,3,4,5};
       System.out.println(trying.maxProfit(prices));
}
public int maxProfit(int[] prices) {
    int smallestindex = prices[0]; 
    int mostprofit = prices[0]; 
    for(int i = 1; i< prices.length; i++) {
        if(prices[i] < smallestindex) {
            smallestindex = i; 
        } 
        if(prices[i] > mostprofit) {
            mostprofit = i; 
        }
    }
    if(mostprofit<smallestindex) {
        return 0;
    } else {
        return mostprofit - smallestindex; 
    }
}
}
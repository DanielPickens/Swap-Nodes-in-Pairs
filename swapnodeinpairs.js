var swapPairs = function(head) {

 if (head == null || head.next == null) return head;
        const lhs = head;
        const rhs = head.next;
        lhs.next = swapPairs(rhs.next);
        rhs.next = lhs;
        return rhs;
    }





/*
Success
Details 
Runtime: 68 ms, faster than 91.45% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 39.1 MB, less than 21.53% of JavaScript online submissions for Swap Nodes in Pairs.
*/
